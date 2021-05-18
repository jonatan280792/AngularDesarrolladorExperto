using Entity.Dtos;
using System;
using System.Collections.Generic;
using System.Data;

namespace Entity.Mappers
{
    public static class ManagementMapper
    {
        // MAPEAR CAMPOS TABLA AERONAVES    
        public static List<AeronavesDto> AsLstAeronaves(this DataTable table)
        {
            List<AeronavesDto> lst = new List<AeronavesDto>();

            if (table != null)
            {
                foreach (DataRow row in table.Rows)
                {
                    lst.Add(new AeronavesDto()
                    {
                        id = Convert.ToInt32(row["id"].ToString()),
                        nombre = row["nombre"].ToString(),
                        idLinea = Convert.ToInt32(row["idLinea"].ToString()),
                        linea = row["linea"].ToString(),
                        capacidad = Convert.ToInt32(row["capacidad"].ToString()),
                        descripcion = row["descripcion"].ToString(),
                        estado = Convert.ToBoolean(row["estado"].ToString()),
                        fechaCreacion = Convert.ToDateTime(row["fechaCreacion"].ToString())
                    });
                }
            }

            return lst;
        }

        // MAPEA LOS CAMPOS DE LA TABLA PILOTOS
        public static List<PilotosDto> AsLstPilotos(this DataTable table)
        {
            List<PilotosDto> lst = new List<PilotosDto>();

            if (table != null)
            {
                foreach (DataRow row in table.Rows)
                {
                    lst.Add(new PilotosDto()
                    {
                        id = Convert.ToInt32(row["id"].ToString()),
                        nombres = row["nombres"].ToString(),
                        apellidos = row["apellidos"].ToString(),
                        idAeronave = Convert.ToInt32(row["idAeronave"].ToString()),
                        aeronave = row["aeronave"].ToString(),
                        estado = Convert.ToBoolean(row["estado"].ToString()),
                        fechaCreacion = Convert.ToDateTime(row["fechaCreacion"].ToString())                        
                    });
                }
            }

            return lst;
        }
    }
}
