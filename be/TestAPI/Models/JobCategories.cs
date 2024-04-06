namespace TestAPI.Models
{
    public class JobCategories
    {
        public int Id { get; set; }
        public string Name { get; set; }
        // 1 JobCategory has many Jobs
        public virtual ICollection<Job>? Jobs { get; set; }
    }
}
