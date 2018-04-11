using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestProj.ADAL;

namespace TestProj.Controllers
{
    [Route("api/adal-configuration")]
    public class ADALConfigurationController : Controller
    {
        private readonly ADALConfiguration _adalConfiguration;

        public ADALConfigurationController(IOptions<ADALConfiguration> adalConfiguration)
        {
            _adalConfiguration = adalConfiguration.Value;
        }

        [HttpGet]
        public ADALConfiguration Get()
        {
            return _adalConfiguration;
        }
    }
}
