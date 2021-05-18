namespace Repository.Helpers
{
    public static class STORE_PROCEDURES
    {
        // CRUD aeronaves
        public static string GET_AERONAVES = "data.get_Aeronaves";
        public static string SET_AERONAVES = "data.set_Aeronaves";
        public static string PUT_AERONAVES = "data.put_Aeronaves";
        public static string DELETE_AERONAVES = "data.delete_Aeronaves";

        // CRUD pilotos
        public static string GET_PILOTOS = "data.get_Pilotos";
        public static string SET_PILOTOS = "data.set_Pilotos";
        public static string PUT_PILOTOS = "data.put_Pilotos";
        public static string DELETE_PILOTOS = "data.delete_Pilotos";


        public static string SET_RESERVAS = "data.set_Reservas";

        // TOKEN
        public static string GET_LOGIN = "identity.get_Login";

    }
}
