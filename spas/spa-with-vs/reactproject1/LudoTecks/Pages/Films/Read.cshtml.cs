using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace LudoTecks.Pages.Films
{
	public class ReadModel : PageModel
	{
		public void OnGet()
		{
			this.Film = new() { Id = 1, Label = "Star wars" };
		}

		public Film Film { get; set; }
	}
}
