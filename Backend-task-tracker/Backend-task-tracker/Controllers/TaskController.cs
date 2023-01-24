using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace Backend_task_tracker.Controllers
{
    [Route("task")]
    [ApiController]
    public class TaskController : Controller
    {
        [HttpGet]
        public List<Task> GetAll()
        {
            return Task.GetAllTask();
        }
        [HttpGet("id")]
        public Task GetOne(int id)
        {
            return Task.GetOneTask(id);
        }
        [HttpPut]
        public Task Update(Task task)
        {
            Task.UpdateTask(task);
            return task;
        }
        [HttpPost]
        public Task Add(Task task)
        {
            return Task.CreateNewTask(task);
        }
        [HttpDelete]
        public void Delete(int id)
        {
            Task.DeleteTask(id);
        }
    
     
    }
}
