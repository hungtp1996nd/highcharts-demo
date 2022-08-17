export interface Serie {
    type: string;
    name: string;
    data: (number | null) [];
    marker?: Marker
}

export interface Marker {
    lineWidth: number;
    lineColor: string;
    fillColor: string;
}