#!/usr/bin/node
const {
  LinkedinScraper,
  ERelevanceFilterOptions,
  ETimeFilterOptions,
  EExperienceLevelOptions,
  events
} = require('linkedin-jobs-scraper');

(async () => {
  // Each scraper instance is associated with one browser.
  // Concurrent queries will run on different pages within the same browser instance.
  const scraper = new LinkedinScraper({
    headless: true,
    slowMo: 50,
    args: [
      '--lang=en-GB'
    ]
  });

  var res = {
    table: []
  };

  // Listen for custom events
  scraper.on(events.scraper.data, (data) => {
    const Techs = require('../techs');
  
    let jbtechs = Techs.tBack(data.description);
    let bcheck = Techs.Bchecker(data.description);
    let jftechs = Techs.tFront(data.description);
    let fcheck = Techs.Fchecker(data.description);
    let jdtechs = Techs.tDev(data.description);
    let dcheck = Techs.Dchecker(data.description);

    res.table.push({
      query: data.query,
      location: data.location,
      title: data.title,
      company: data.company,
      place: data.place,
      date: data.date,
      description: data.description,
      jobBackTechs: jbtechs,
      techTypeBack: bcheck,
      jobFrontTechs: jftechs,
      techTypeFront: fcheck,
      jobDevopsTechs: jdtechs,
      techTypeDevops: dcheck,
      link: data.link,
      senorityLevel: data.senorityLevel,
      jobFunction: data.jobFunction,
      employmenttype: data.employmentType,
      industries: data.industries
    });
  }
  );

  scraper.on(events.scraper.error, (err) => {
    console.error(err);
  });

  scraper.on(events.scraper.end, () => {
    console.log('All done!');
    const fs = require('fs');
    fs.writeFile('./data.json', JSON.stringify(res.table), 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The data has been scraped and saved successfully! View it at './data.json'");
    });
  });

  // Add listeners for puppeteer browser events
  scraper.on(events.puppeteer.browser.targetcreated, () => {
  });
  scraper.on(events.puppeteer.browser.targetchanged, (data) => {

  });
  scraper.on(events.puppeteer.browser.targetdestroyed, () => {

  });
  scraper.on(events.puppeteer.browser.disconnected, () => {
  });

  // Custom function executed on browser side to extract job description
  const descriptionFn = () => document.querySelector('.description__text')
    .innerText
    .replace(/[\s\n\r]+/g, ' ')
    .trim();

  // Run queries concurrently
  await Promise.all([
    scraper.run({
      query: 'Software Engineer',
      options: {
        locations: ['Anywhere'],
        descriptionFn: descriptionFn,
        filters: {
          relevance: ERelevanceFilterOptions.RELEVANT,
          time: ETimeFilterOptions.MONTH,
          experience: [EExperienceLevelOptions.INTERNSHIP, EExperienceLevelOptions.ENTRY_LEVEL, EExperienceLevelOptions.ASSOCIATE]
        }
      }
    })
  ]);

  // Close browser
  await scraper.close();
})();
