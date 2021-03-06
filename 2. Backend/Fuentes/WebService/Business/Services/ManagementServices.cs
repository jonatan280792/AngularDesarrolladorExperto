using Business.Interfaces;
using Entity.Dtos;
using Entity.Mappers;
using Repository.Interfaces;
using System.Collections.Generic;

namespace Business.Services
{
    public class ManagementServices : IManagementServices
    {
        IManagementRepository _repository;
        public ManagementServices(IManagementRepository repository)
        {
            _repository = repository;
        }

        // CRUD Aeronaves
        public List<AeronavesDto> getAeronaves() => _repository.getAeronaves().AsLstAeronaves();
        public ResultDto setAeronaves(AeronavesDto dto) => _repository.setAeronaves(dto).AsResult();
        public ResultDto putAeronaves(AeronavesDto dto, int id) => _repository.putAeronaves(dto, id).AsResult();
        public ResultDto deleteAeronaves(int id) => _repository.deleteAeronaves(id).AsResult();

        // CRUD Pilotos
        public List<PilotosDto> getPilotos() => _repository.getPilotos().AsLstPilotos();
        public ResultDto setPilotos(PilotosDto dto) => _repository.setPilotos(dto).AsResult();
        public ResultDto putPilotos(PilotosDto dto, int id) => _repository.putPilotos(dto, id).AsResult();
        public ResultDto deletePilotos(int id) => _repository.deletePilotos(id).AsResult();

        public ResultDto setReservas(ReservasDto dto) => _repository.setReservas(dto).AsResult();
    }
}
