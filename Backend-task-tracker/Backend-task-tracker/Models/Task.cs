using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;
using System.Collections.Specialized;
using System.ComponentModel;

namespace Backend_task_tracker
{
    [Table("Task")]
    public class Task
    {
        [ExplicitKey]
        public int id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string start_date { get; set; }
        public string target_end_date { get; set; }
        public double completion_percentage { get; set; }
        public int priority_level { get;set;}

        public static MySqlConnection DB;
        
        // I want to GetALL Task,get One Task, Create a Task, Update a Task, Delete a Task

       public static List<Task> GetAllTask()
        {
            DB.Open();
            var result = DB.GetAll<Task>().ToList();
            DB.Close();
            return result;
        }

        public static Task GetOneTask(int id)
        {
            DB.Open();
            var result = DB.Get<Task>(id);
            DB.Close();
            return result;

        }
        public static Task CreateNewTask(Task x)
        {
            Task newtask = new Task();
            newtask = x;
            DB.Open();
            DB.Insert(newtask);
            DB.Close();
            return newtask;

        }
        public static void UpdateTask(Task x)
        {
            DB.Open();
            DB.Update(x);
            DB.Close();
        }
        public static void DeleteTask(int id)
        {
            Task newtask = new Task() { id = id };
            DB.Open();
            DB.Delete(newtask);
            DB.Close();
        }
    }



}
