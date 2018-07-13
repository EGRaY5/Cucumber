package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "D:\\QA\\Task 2\\Ikman.lk-Cucumber_ex2\\src\\test\\resources\\houseads.feature"
        ,glue={"IkmanBDD"}
        ,format={"pretty","html:target/cucumber"}
)

public class TestRunner {

}