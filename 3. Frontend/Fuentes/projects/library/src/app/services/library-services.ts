import {
  buildRoute,
  ServicesRoutes
} from '@services/services-routes';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceUtils } from '@services/services-utils';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  constructor(
    private serviceUtils: ServiceUtils,
  ) { }

  // CRUD aeronaves
  public getAeronaves(): Observable<any> {
    return this.serviceUtils.buildRequest(ServicesRoutes.getAeronaves, 'get');
  }

  public setAeronaves(data): Observable<any> {
    return this.serviceUtils.buildRequest(ServicesRoutes.setAeronaves, 'post', data);
  }

  public updateAeronaves(data): Observable<any> {
    return this.serviceUtils.buildRequest(buildRoute(ServicesRoutes.updateAeronaves, {
      idAeronave: data.id
    }), 'put', data);
  }

  public deletetAeronaves(data): Observable<any> {
    return this.serviceUtils.buildRequest(buildRoute(ServicesRoutes.deletetAeronaves, {
      idAeronave: data.id
    }), 'delete');
  }

  // CRUD Pilotos
  public getPilotos(): Observable<any> {
    return this.serviceUtils.buildRequest(ServicesRoutes.getPilotos, 'get');
  }

  public setPilotos(data): Observable<any> {
    return this.serviceUtils.buildRequest(ServicesRoutes.setPilotos, 'post', data);
  }

  public updatePilotos(data): Observable<any> {
    return this.serviceUtils.buildRequest(buildRoute(ServicesRoutes.updatePilotos, {
      idPiloto: data.id
    }), 'put', data);
  }

  public deletePilotos(data): Observable<any> {
    return this.serviceUtils.buildRequest(buildRoute(ServicesRoutes.deletePilotos, {
      idPiloto: data.id
    }), 'delete');
  }

  public setReservas(data) {
    return this.serviceUtils.buildRequest(ServicesRoutes.setReservas, 'post', data);
  }
}
