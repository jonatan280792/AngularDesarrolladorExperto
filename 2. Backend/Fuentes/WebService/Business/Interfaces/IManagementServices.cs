using Entity.Dtos;
using System.Collections.Generic;

namespace Business.Interfaces
{
    public interface IManagementServices
    {
        List<AeronavesDto> getAeronaves();
        ResultDto setAeronaves(AeronavesDto dto);
        ResultDto putAeronaves(AeronavesDto dto, int id);
        ResultDto deleteAeronaves(int id);

        List<PilotosDto> getPilotos();
        ResultDto setPilotos(PilotosDto dto);
        ResultDto putPilotos(PilotosDto dto, int id);
        ResultDto deletePilotos(int id);

        ResultDto setReservas(ReservasDto dto);
    }
}
