using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UBTech.Bl;

namespace UBTech.Api.Controllers
{
    public class UBTechController : ApiController
    {
        [HttpGet]
        public IHttpActionResult GetAllNames()
        {
            return Ok(UBTechBl.GetAllPeopleBl());
        }
    }
}
