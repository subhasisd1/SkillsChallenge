﻿using InterviewTest.Models;
using Microsoft.AspNetCore.Mvc;

namespace InterviewTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InitializeController : ControllerBase
    {
        private readonly PersonContext _personContext;
        private readonly PlaceContext _placeContext;
        private readonly ThingContext _context;
        public InitializeController(ILogger<PeopleController> logger, PersonContext personContext, PlaceContext placeContext, ThingContext context)
        {
            _personContext = personContext;
            _placeContext = placeContext;
            _context = context;
        }

        private async Task SeedPeople()
        {
            var person = _personContext.People.FirstOrDefault(p => p.Id == 1);
            if (person == null)
            {
                await _personContext.AddRangeAsync(new List<Person>(){
                    new Person()
                    {
                        Id = 1,
                        FirstName = "Jim",
                        LastName = "Parsons",
                        Birthday = new DateTime(1977,2,20)
                    },
                     new Person()
                    {
                         Id = 2,
                        FirstName = "Tony",
                        LastName = "Smith",
                        Birthday = new DateTime(1937,6,10)
                    }

                });
                await _personContext.SaveChangesAsync();
            }
           
        }

        private async Task SeedPlaces()
        {
            var person = _placeContext.Places.FirstOrDefault(p => p.Id == 1);
            if (person == null)
            {
                await _placeContext.AddRangeAsync(new List<Place>() {
            new Place()
            {
                Id = 1,
                Name = "Big Ben",
                City = "London",
                State = "UK"
            },
            new Place()
            {
                Id = 2,
                Name = "Willis Tower",
                City = "Chicago",
                State = "Illinois"
            }
        });
                await _placeContext.SaveChangesAsync();
            }
        }

        private async Task SeedThings()
        {
            var person = _context.Things.FirstOrDefault(p => p.Id == 1);
            if (person == null)
            {
                await _context.AddRangeAsync(new List<Thing>()
        {
            new Thing()
            {
                Id = 1,
                Name= "Shoe",
                Description = "It goes on your feet"
            },
            new Thing()
            {
                Id= 2,
                Name = "Towel",
                Description = "You can dry things with it"
            }
        });
                await _context.SaveChangesAsync();
            }
        }

        [HttpGet]
        public async Task<ActionResult<bool>> Get()
        {
            await SeedPeople();
            await SeedPlaces();
            await SeedThings();
            return Ok();
        }
    }
}
