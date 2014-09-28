using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebServer.Controllers
{
  public class HomeController : AbstractController
  {
    public ActionResult Index()
    {
      return View();
    }
  }
}