import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { environment } from '@env/environment';
@Injectable({ providedIn: 'root' })
export class ApiService {
    private apiURL = `${environment.baseInventoryUrl}`;
    // private apiURL = `${environment.baseGl}`;
    // private apiURL = `${environment.baseClinic}`;
    /*  list clinic setup httpRequest 
    @param controller @param page @param size  */
    constructor(private http: HttpClient) { }
    list(controller?: any, page?: number, size?: number): Observable<any> {
        return this.http.get<any>(`${this.apiURL}${controller}list?page=${page}&size=${size}`);
    }
    /*  list clinic setup httpRequest 
        @param controller @param masterObject */
    create(controller?: any, masterObject?: any): Observable<any> {
        return this.http.post<any>(`${this.apiURL}${controller}new`, masterObject);
    }
    /*  list clinic setup httpRequest 
        @param controller @param masterId  */
    find(controller?: any, masterId?: number) {
        return this.http.get(`${this.apiURL}${controller}find?id=` + masterId);
    }
    /*  list clinic setup httpRequest 
        @param controller @param masterId  */
    findByName(controller?: any, name?: any, masterId?: number) {
        return this.http.get(`${this.apiURL}${controller}${name}` + masterId);
    }
    /*  list clinic setup httpRequest 
        @param controller @param masterObject  */
    update(controller?: any, masterObject?: any): Observable<any> {
        return this.http.put<any>(`${this.apiURL}${controller}update`, masterObject);
    }
    /*  list clinic setup httpRequest 
        @param controller @param masterId  */
    delete(controller?: any, masterId?: number): Observable<any> {
        return this.http.delete<any>(`${this.apiURL}${controller}delete?id=${masterId}`);
    }

    /* rare Used API methods */
    refresh(controller?: any, refreshController?: any, id?: number): Observable<any> {
        return this.http.get<any>(`${this.apiURL}${controller}${refreshController}${id}`);
    }
}
