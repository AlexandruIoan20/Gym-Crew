import { HttpContext } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";

export interface Options  {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

interface ExerciceList { 
    bench: number, 
    squat: number, 
    deadlift: number, 
    bbrow: number, 
    dbpress: number, 
}

export interface User { 
    name: string, 
    email: string, 
    password: string, 
    image: string,
    crewIds?: string[], 
    workoutIds?: string[], 
    friends?: string[], 
    friendRequests?: string[], 
    prStats?: { 
        type: ExerciceList
    }
}