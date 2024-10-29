using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace LudoTecks.Pages.Films
{
	public class Film
	{
		public int Id { get; set; }
		public required string Label { get; set; }
	}

	public class IndexModel : PageModel
	{
		public void OnGet()
		{
			this.Films.Add(new() { Id = 1, Label = "Star wars" });
			this.Films.Add(new() { Id = 2, Label = "Dune" });
		}

		public List<Film> Films { get; set; } = [];
	}
}
