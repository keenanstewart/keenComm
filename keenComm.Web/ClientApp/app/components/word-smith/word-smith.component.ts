import { Component, Inject } from "@angular/core";
import { Http } from "@angular/http";

@Component({
    selector: "word-smith",
	templateUrl: "./word-smith.component.html",
	styleUrls: ["./word-smith.component.css"]
})
export class WordSmithComponent
{
	public message: string = "";
	constructor(http: Http, @Inject("BASE_URL") baseUrl: string)
	{
		console.log("In constructor for word-smith, baseUrl is: " + baseUrl);
		// this.message = http.get(baseUrl + "api/WordSmith/GetWordSmithWord").first.toString();
		http.get(baseUrl + "api/WordSmith/word").subscribe(result =>
		{
			this.message = result.json() as string;
		},error => console.error(error));	
	}
}
