export type Data = {
    titulo:      Titulo;
    experiencia: Record<string, Exp>;
    proyectos:   Record<string, Proyecto>;
    estudios:    Record<string, Estudio>;
}

export type Estudio = {
    institucion:   string;
    lugar:         string;
    titulo:        string;
    tiempo:        string;
    conocimientos: string[];
}

export type Exp = {
    empresa:     string;
    lugar:       string;
    puesto:      string;
    tiempo:      string;
    experiencia: string;
}

export type Proyecto = {
    img:         string;
    titulo:      string;
    descripcion: string;
    tecnologias: string[];
    url:         string;
    github:      string;
}

export type Titulo = {
    titulo:      string;
    subtitulo:   string;
    descripcion: string;
}