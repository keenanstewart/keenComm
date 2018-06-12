using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace keenComm.Web.Controllers
{
	[Route("api/[controller]")]
	public class WordSmithController : Controller
	{
		[HttpGet("word")]
		public string WordSmithWord()
		{
			return "demit";
		}

		[HttpGet("definition")]
		public string WordSmithDefinition()
		{
			return "To give up an office or a position; to dismiss";
		}
    }
}
