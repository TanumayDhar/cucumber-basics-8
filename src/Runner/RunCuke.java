package Runner;
import java.io.File;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)

@CucumberOptions(features={"src/feature"},
glue={"Steps"},
monochrome=true,
//tags= {"@Functional"},
plugin = {"pretty","html:target/cucumber","com.cucumber.listener.ExtentCucumberFormatter"})

public class RunCuke {

	@BeforeClass	
	public static void setUp()
	{

		ExtentCucumberFormatter.initiateExtentCucumberFormatter();

		ExtentCucumberFormatter.loadConfig(new File("src/extent-config.xml"));

		ExtentCucumberFormatter.addSystemInfo("Browser name","Chrome");
		ExtentCucumberFormatter.addSystemInfo("Browser version ","V86");
		ExtentCucumberFormatter.addSystemInfo("Selenium Version","V3");

	}


}
