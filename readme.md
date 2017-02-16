# Back end developer brief

## Purpose
Purpose of this brief is to test basic software development skills.

## Brief
You will need to write **two (2)** very basic applications. 

1. Application that ingest CSV file with post codes and areas into a "storage". This will run one off, however can run every X amount of days.
2. Web API/REST API application that will return name of the Area, Lat,Lng based on passed in Zip code as JSON. Please see `materials\return.json` for to see what the returned string could look like when query such as `http://localhost/areas?postcode=2000`.

Alternatively, you can skip first application and make your application 2 read the file, store in memory. As long as it returns correct record.

## Criteria

* You are given list of **post codes and areas** of Australia that you will need to ingest into a storage of your choice (relational or non relational database). Please see `materials\Australian_Post_Codes_Lat_Lon.csv`
* Choice of technology is **yours to make**, same goes for **frameworks and languages**. You will be required to explain your choices - you have been warned!
* You are to use Git for your source control. (BitBucket, GitHub, Visual Studio Team Services are fine for hosting).
* You need to time yourself - it is not a race and we don't want you to cut corners, however we do not want you also spending hours on this task either. *If you say it took you 10 minutes to complete - we will make you repeat it during the interview*
* You might or might not include tests (unit tests etc.) - ready to explain.
* You solution should follow best practices for the technology you choose - eg. if it is a .NET application we should be able to build it using msbuild and not go through a readme file on how to compile it.