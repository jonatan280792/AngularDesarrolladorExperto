using Entity.Dtos;
using Microsoft.Extensions.Configuration;
using Repository.Helpers;
using Repository.Interfaces;
using System;
using System.Data;
using System.Data.SqlClient;

namespace Repository.Repositories
{
    public class ManagementRepository : IManagementRepository
    {
        readonly IConfiguration _config;
        DBContext dbContext = new DBContext();
        DataTable tblResult;
        SqlConnection con;

        public ManagementRepository(IConfiguration config)
        {
            _config = config;
        }

        public DataTable getAeronaves()
        {

            using (con = new SqlConnection(dbContext.ObtenerCadenaDbConexSQL(_config["config:urlConex"])))
            {
                try
                {
                    tblResult = new DataTable();
                    con.Open();
                    if (con.State == ConnectionState.Open)
                    {
                        SqlDataAdapter cmd = new SqlDataAdapter(STORE_PROCEDURES.GET_AERONAVES, con);
                        cmd.SelectCommand.CommandType = CommandType.StoredProcedure;
                        cmd.SelectCommand.Parameters.Add("@status", SqlDbType.Bit).Value = true;
                        cmd.Fill(tblResult);

                        cmd.Dispose();
                    }
                }
                catch (SqlException ex)
                {
                    con.Close();
                    throw new InvalidOperationException("TAG: " + ex.Message + ex.ErrorCode + ex.Data, ex.InnerException);
                }
                catch (Exception)
                {
                    throw new Exception();
                }
                con.Close();
                return tblResult;
            }
        }

        public DataTable setAeronaves(AeronavesDto dto)
        {

            using (con = new SqlConnection(dbContext.ObtenerCadenaDbConexSQL(_config["config:urlConex"])))
            {
                try
                {
                    tblResult = new DataTable();
                    con.Open();
                    if (con.State == ConnectionState.Open)
                    {
                        SqlDataAdapter cmd = new SqlDataAdapter(STORE_PROCEDURES.SET_AERONAVES, con);
                        cmd.SelectCommand.CommandType = CommandType.StoredProcedure;
                        cmd.SelectCommand.Parameters.Add("@nombre", SqlDbType.VarChar).Value = dto.nombre;
                        cmd.SelectCommand.Parameters.Add("@idLinea", SqlDbType.Int).Value = dto.idLinea;
                        cmd.SelectCommand.Parameters.Add("@capacidad", SqlDbType.VarChar).Value = dto.capacidad;
                        cmd.SelectCommand.Parameters.Add("@descripcion", SqlDbType.VarChar).Value = dto.descripcion;
                        cmd.SelectCommand.Parameters.Add("@estado", SqlDbType.Bit).Value = dto.estado;
                        cmd.Fill(tblResult);

                        cmd.Dispose();
                    }
                }
                catch (SqlException ex)
                {
                    con.Close();
                    throw new InvalidOperationException("TAG: " + ex.Message + ex.ErrorCode + ex.Data, ex.InnerException);
                }
                catch (Exception)
                {
                    throw new Exception();
                }
                con.Close();
                return tblResult;
            }
        }

        public DataTable putAeronaves(AeronavesDto dto, int id)
        {

            using (con = new SqlConnection(dbContext.ObtenerCadenaDbConexSQL(_config["config:urlConex"])))
            {
                try
                {
                    tblResult = new DataTable();
                    con.Open();
                    if (con.State == ConnectionState.Open)
                    {
                        SqlDataAdapter cmd = new SqlDataAdapter(STORE_PROCEDURES.PUT_AERONAVES, con);
                        cmd.SelectCommand.CommandType = CommandType.StoredProcedure;
                        cmd.SelectCommand.Parameters.Add("@id", SqlDbType.Int).Value = id;
                        cmd.SelectCommand.Parameters.Add("@nombre", SqlDbType.VarChar).Value = dto.nombre;
                        cmd.SelectCommand.Parameters.Add("@idLinea", SqlDbType.Int).Value = dto.idLinea;
                        cmd.SelectCommand.Parameters.Add("@capacidad", SqlDbType.Int).Value = dto.capacidad;
                        cmd.SelectCommand.Parameters.Add("@descripcion", SqlDbType.NVarChar).Value = dto.descripcion;
                        cmd.SelectCommand.Parameters.Add("@estado", SqlDbType.Bit).Value = dto.estado;
                        cmd.Fill(tblResult);

                        cmd.Dispose();
                    }
                }
                catch (SqlException ex)
                {
                    con.Close();
                    throw new InvalidOperationException("TAG: " + ex.Message + ex.ErrorCode + ex.Data, ex.InnerException);
                }
                catch (Exception)
                {
                    throw new Exception();
                }
                con.Close();
                return tblResult;
            }
        }

        public DataTable deleteAeronaves(int id)
        {

            using (con = new SqlConnection(dbContext.ObtenerCadenaDbConexSQL(_config["config:urlConex"])))
            {
                try
                {
                    tblResult = new DataTable();
                    con.Open();
                    if (con.State == ConnectionState.Open)
                    {
                        SqlDataAdapter cmd = new SqlDataAdapter(STORE_PROCEDURES.DELETE_AERONAVES, con);
                        cmd.SelectCommand.CommandType = CommandType.StoredProcedure;
                        cmd.SelectCommand.Parameters.Add("@id", SqlDbType.Int).Value = id;
                        cmd.Fill(tblResult);

                        cmd.Dispose();
                    }
                }
                catch (SqlException ex)
                {
                    con.Close();
                    throw new InvalidOperationException("TAG: " + ex.Message + ex.ErrorCode + ex.Data, ex.InnerException);
                }
                catch (Exception)
                {
                    throw new Exception();
                }
                con.Close();
                return tblResult;
            }
        }

        public DataTable getPilotos()
        {

            using (con = new SqlConnection(dbContext.ObtenerCadenaDbConexSQL(_config["config:urlConex"])))
            {
                try
                {
                    tblResult = new DataTable();
                    con.Open();
                    if (con.State == ConnectionState.Open)
                    {
                        SqlDataAdapter cmd = new SqlDataAdapter(STORE_PROCEDURES.GET_PILOTOS, con);
                        cmd.SelectCommand.CommandType = CommandType.StoredProcedure;
                        cmd.SelectCommand.Parameters.Add("@status", SqlDbType.Bit).Value = true;
                        cmd.Fill(tblResult);

                        cmd.Dispose();
                    }
                }
                catch (SqlException ex)
                {
                    con.Close();
                    throw new InvalidOperationException("TAG: " + ex.Message + ex.ErrorCode + ex.Data, ex.InnerException);
                }
                catch (Exception)
                {
                    throw new Exception();
                }
                con.Close();
                return tblResult;
            }
        }

        public DataTable setPilotos(PilotosDto dto)
        {

            using (con = new SqlConnection(dbContext.ObtenerCadenaDbConexSQL(_config["config:urlConex"])))
            {
                try
                {
                    tblResult = new DataTable();
                    con.Open();
                    if (con.State == ConnectionState.Open)
                    {
                        SqlDataAdapter cmd = new SqlDataAdapter(STORE_PROCEDURES.SET_PILOTOS, con);
                        cmd.SelectCommand.CommandType = CommandType.StoredProcedure;
                        cmd.SelectCommand.Parameters.Add("@nombres", SqlDbType.VarChar).Value = dto.nombres;
                        cmd.SelectCommand.Parameters.Add("@apellidos", SqlDbType.VarChar).Value = dto.apellidos;
                        cmd.SelectCommand.Parameters.Add("@idAeronave", SqlDbType.Int).Value = dto.idAeronave;
                        cmd.SelectCommand.Parameters.Add("@estado", SqlDbType.Bit).Value = dto.estado;
                        cmd.Fill(tblResult);

                        cmd.Dispose();
                    }
                }
                catch (SqlException ex)
                {
                    con.Close();
                    throw new InvalidOperationException("TAG: " + ex.Message + ex.ErrorCode + ex.Data, ex.InnerException);
                }
                catch (Exception)
                {
                    throw new Exception();
                }
                con.Close();
                return tblResult;
            }
        }

        public DataTable putPilotos(PilotosDto dto, int id)
        {

            using (con = new SqlConnection(dbContext.ObtenerCadenaDbConexSQL(_config["config:urlConex"])))
            {
                try
                {
                    tblResult = new DataTable();
                    con.Open();
                    if (con.State == ConnectionState.Open)
                    {
                        SqlDataAdapter cmd = new SqlDataAdapter(STORE_PROCEDURES.PUT_PILOTOS, con);
                        cmd.SelectCommand.CommandType = CommandType.StoredProcedure;
                        cmd.SelectCommand.Parameters.Add("@id", SqlDbType.Int).Value = id;
                        cmd.SelectCommand.Parameters.Add("@nombres", SqlDbType.VarChar).Value = dto.nombres;
                        cmd.SelectCommand.Parameters.Add("@apellidos", SqlDbType.VarChar).Value = dto.apellidos;
                        cmd.SelectCommand.Parameters.Add("@idAeronave", SqlDbType.Int).Value = dto.idAeronave;
                        cmd.SelectCommand.Parameters.Add("@estado", SqlDbType.Bit).Value = dto.estado;                        
                        cmd.Fill(tblResult);

                        cmd.Dispose();
                    }
                }
                catch (SqlException ex)
                {
                    con.Close();
                    throw new InvalidOperationException("TAG: " + ex.Message + ex.ErrorCode + ex.Data, ex.InnerException);
                }
                catch (Exception)
                {
                    throw new Exception();
                }
                con.Close();
                return tblResult;
            }
        }

        public DataTable deletePilotos(int id)
        {

            using (con = new SqlConnection(dbContext.ObtenerCadenaDbConexSQL(_config["config:urlConex"])))
            {
                try
                {
                    tblResult = new DataTable();
                    con.Open();
                    if (con.State == ConnectionState.Open)
                    {
                        SqlDataAdapter cmd = new SqlDataAdapter(STORE_PROCEDURES.DELETE_PILOTOS, con);
                        cmd.SelectCommand.CommandType = CommandType.StoredProcedure;
                        cmd.SelectCommand.Parameters.Add("@id", SqlDbType.Int).Value = id;
                        cmd.Fill(tblResult);

                        cmd.Dispose();
                    }
                }
                catch (SqlException ex)
                {
                    con.Close();
                    throw new InvalidOperationException("TAG: " + ex.Message + ex.ErrorCode + ex.Data, ex.InnerException);
                }
                catch (Exception)
                {
                    throw new Exception();
                }
                con.Close();
                return tblResult;
            }
        }

        public DataTable setReservas(ReservasDto dto)
        {
            using (con = new SqlConnection(dbContext.ObtenerCadenaDbConexSQL(_config["config:urlConex"])))
            {
                try
                {
                    tblResult = new DataTable();
                    con.Open();
                    if (con.State == ConnectionState.Open)
                    {
                        SqlDataAdapter cmd = new SqlDataAdapter(STORE_PROCEDURES.SET_RESERVAS, con);
                        cmd.SelectCommand.CommandType = CommandType.StoredProcedure;
                        cmd.SelectCommand.Parameters.Add("@destino", SqlDbType.VarChar).Value = dto.ubicacion;
                        cmd.SelectCommand.Parameters.Add("@fechaIda", SqlDbType.Date).Value = dto.llegada;
                        cmd.SelectCommand.Parameters.Add("@fechaRegreso", SqlDbType.Date).Value = dto.salida;
                        cmd.SelectCommand.Parameters.Add("@pasajeros", SqlDbType.Int).Value = dto.pasajeros;
                        cmd.SelectCommand.Parameters.Add("@finalizado", SqlDbType.Bit).Value = false;
                        cmd.Fill(tblResult);

                        cmd.Dispose();
                    }
                }
                catch (SqlException ex)
                {
                    con.Close();
                    throw new InvalidOperationException("TAG: " + ex.Message + ex.ErrorCode + ex.Data, ex.InnerException);
                }
                catch (Exception)
                {
                    throw new Exception();
                }
                con.Close();
                return tblResult;
            }
        }
    }
}
