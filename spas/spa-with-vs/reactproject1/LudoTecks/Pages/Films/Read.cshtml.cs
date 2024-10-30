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

		public IActionResult OnPost(Film film)
		{
			return new JsonResult(new
			{
				Status = "OK",
				Item = film
			});
		}

		public Film Film { get; set; }
	}
}
