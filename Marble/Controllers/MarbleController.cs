using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Marble.Controllers
{
    public class MarbleController : ApiController
    {
        public class Marble
        {
            public string Color { get; set; }
        }

        List<Marble> marbleBag = new List<Marble>();

        // GET: Marble
        public IHttpActionResult Get()
        {
            var rnd = new Random();
            int random = rnd.Next(0, (marbleBag.Count - 1));

            return Ok(marbleBag[random]);
        }

        [HttpPost]
        public IHttpActionResult Add(Marble marble)
        {
            marbleBag.Add(marble);
            
            return Ok();
        }
    }
}