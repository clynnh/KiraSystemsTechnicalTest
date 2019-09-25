var fs = require("fs");

function convertDateTimeToMS(dateTime) {
  return new Date(dateTime).valueOf();
}

function getEventWithDateTimeInMS(event) {
  return Object.assign({}, event, {
    startTime: convertDateTimeToMS(event.startTime),
    endTime: convertDateTimeToMS(event.endTime)
  });
}

function checkIfOverlaps(event1, event2) {
  if (
    (event1.endTime > event2.startTime && event1.endTime <= event2.endTime) ||
    (event1.startTime >= event2.startTime && event1.startTime < event2.endTime) ||
    (event2.endTime > event1.startTime && event2.endTime <= event1.endTime) ||
    (event2.startTime >= event1.startTime && event2.startTime < event1.endTime)
  ) {
    return true;
  }
  return false;
}

function compareEvents(eventList, start, end) {
  if (end >= eventList.length - 1 && start == eventList.length - 1) {
    return [];
  }

  let returnObject;

  if (checkIfOverlaps(eventList[start], eventList[end])) {
    returnObject = { true: [eventList[start], eventList[end]] };
  } else {
    returnObject = { false: [eventList[start], eventList[end]] };
  }

  if (end >= eventList.length - 1) {
    return [returnObject, ...compareEvents(eventList, start + 1, start + 2)];
  } else {
    return [returnObject, ...compareEvents(eventList, start, end + 1)];
  }
}

fs.readdir("./data/", function(err, files) {
  if (err) {
    console.log("Read directory error: " + err);
    throw err;
  }
  files.map(function(file) {
    fs.readFile("./data/" + file, "utf8", function(err, data) {
      if (err) {
        console.log("Read file error: " + file + err);
        throw err;
      }
      console.log("------ " + file + " ------");
      let jsonData = JSON.parse(data);

      compareEvents(
        jsonData.existingEvents.map(getEventWithDateTimeInMS),
        0,
        1
      ).filter(function(overlap) {
        return overlap.true;
      }).map(function(overlappingSequences) {
        console.log(overlappingSequences.true[0].description + " overlaps with " + overlappingSequences.true[1].description);
      });
    });
  });
});
