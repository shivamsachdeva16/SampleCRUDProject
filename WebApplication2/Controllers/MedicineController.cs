using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication2.Models;


namespace WebApplication2.Controllers
{
    public class MedicineController : ApiController
    {
        public HttpResponseMessage Get()
        {

            DataTable table = new DataTable();

            string query = @"
                            select MedicineID, MedicineName, Brand, Price, Quantity, convert(varchar(10),ExpiryDate,120) as ExpiryDate, Notes from dbo.medicines ";

            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["MedicineAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }


        public String Post(Medicine med)
        {
            DataTable table = new DataTable();

            SqlConnection cn = new SqlConnection(ConfigurationManager.ConnectionStrings["MedicineAppDB"].ConnectionString);
            SqlCommand cmd = new SqlCommand("addMed", cn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@MedicineName" , med.MedicineName);
            cmd.Parameters.AddWithValue("@Brand", med.Brand);
            cmd.Parameters.AddWithValue("@Price", med.Price);
            cmd.Parameters.AddWithValue("@Quantity", med.Quantity);
            cmd.Parameters.AddWithValue("@ExpiryDate", med.ExpiryDate);
            cmd.Parameters.AddWithValue("@Notes", med.Notes);

            cn.Open();
            cmd.ExecuteNonQuery();
            cn.Close();
            //try
           // {

                //string query = @"
                //            insert into dbo.medicines (MedicineName,Brand, Price, Quantity, ExpiryDate, Notes) Values 
                //            ('"+med.MedicineName + @"'
                //            ,'" +med.Brand + @"'
                //             ,'" +med.Price + @"'
                //             , '"+med.Quantity +@"'
                //             ,'"+med.ExpiryDate +@"' 
                //             , '"+med.Notes +@"')";

                //using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["MedicineAppDB"].ConnectionString))
                //using (var cmd = new SqlCommand(query, con))
                //using (var da = new SqlDataAdapter(cmd))
                //{
                //    cmd.CommandType = CommandType.Text;
                //    da.Fill(table);
                //}
                return "Added Succesfuly";
            }
            
        }
    }


