// Datos de la app guardados en memoria con un Context de React.
// Es simple a propósito: no hay servidor, los reportes viven mientras la app está abierta.
import { createContext, useContext, useState, type ReactNode } from 'react';

export type Categoria = 'electricidad' | 'agua' | 'mobiliario' | 'equipos';
export type EstadoReporte = 'pendiente' | 'en curso' | 'resuelto';

export const CATEGORIAS: Categoria[] = ['electricidad', 'agua', 'mobiliario', 'equipos'];
export const SECTORES = ['Patio', 'Estacionamiento', 'Pasillo', 'Biblioteca', 'Laboratorio', 'Baños'];

export type Ubicacion = {
  latitud: number;
  longitud: number;
  aproximada: boolean;
};

export type Borrador = {
  titulo: string;
  descripcion: string;
  aula: string;
  categoria: Categoria;
  fotoUri?: string;
  ubicacion?: Ubicacion; // si la persona dio permiso de ubicación
  sector?: string; // si eligió el sector a mano
};

export type Reporte = Borrador & {
  id: string;
  estado: EstadoReporte;
  fecha: string;
};

export type Aviso = { id: string; texto: string; fecha: string };

const BORRADOR_VACIO: Borrador = {
  titulo: '',
  descripcion: '',
  aula: '',
  categoria: 'electricidad',
};

// Un reporte de ejemplo para que la lista no arranque vacía.
const EJEMPLO: Reporte = {
  id: '1',
  titulo: 'Luz quemada',
  descripcion: 'El tubo del fondo no prende.',
  aula: 'Aula 12',
  categoria: 'electricidad',
  sector: 'Pasillo',
  estado: 'en curso',
  fecha: new Date().toLocaleString(),
};

type DatosApp = {
  reportes: Reporte[];
  borrador: Borrador;
  actualizarBorrador: (cambios: Partial<Borrador>) => void;
  guardarReporte: () => string;
  cambiarEstado: (id: string, estado: EstadoReporte) => void;
  avisos: Aviso[];
  agregarAviso: (texto: string) => void;
  avisarAlResolver: boolean;
  setAvisarAlResolver: (valor: boolean) => void;
};

const ReportesContext = createContext<DatosApp | null>(null);

export function ReportesProvider({ children }: { children: ReactNode }) {
  const [reportes, setReportes] = useState<Reporte[]>([EJEMPLO]);
  const [borrador, setBorrador] = useState<Borrador>(BORRADOR_VACIO);
  const [avisos, setAvisos] = useState<Aviso[]>([]);
  const [avisarAlResolver, setAvisarAlResolver] = useState(false);

  function actualizarBorrador(cambios: Partial<Borrador>) {
    setBorrador((anterior) => ({ ...anterior, ...cambios }));
  }

  function guardarReporte() {
    const id = String(Date.now());
    const nuevo: Reporte = {
      ...borrador,
      id,
      estado: 'pendiente',
      fecha: new Date().toLocaleString(),
    };
    setReportes((lista) => [nuevo, ...lista]);
    setBorrador(BORRADOR_VACIO);
    return id;
  }

  function cambiarEstado(id: string, estado: EstadoReporte) {
    setReportes((lista) => lista.map((r) => (r.id === id ? { ...r, estado } : r)));
  }

  function agregarAviso(texto: string) {
    const aviso: Aviso = { id: String(Date.now()), texto, fecha: new Date().toLocaleString() };
    setAvisos((lista) => [aviso, ...lista]);
  }

  return (
    <ReportesContext.Provider
      value={{
        reportes,
        borrador,
        actualizarBorrador,
        guardarReporte,
        cambiarEstado,
        avisos,
        agregarAviso,
        avisarAlResolver,
        setAvisarAlResolver,
      }}>
      {children}
    </ReportesContext.Provider>
  );
}

export function useReportes() {
  const datos = useContext(ReportesContext);
  if (!datos) throw new Error('useReportes tiene que usarse dentro de ReportesProvider');
  return datos;
}
