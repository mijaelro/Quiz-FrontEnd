import "./QuestionsLinks.css";

function QuestionsLinks(): JSX.Element {
    return (
        <div className="QuestionsLinks">
			<table>
                  <thead>
                      <tr>
                        <th >Id</th>
                        <th>Name</th>
                        {/* <th>Link</th> */}
                        {/* <th>Description</th> */}
                      </tr>
                  </thead>
            <tbody>
            
                    <tr id="java">
                        <td id="idLinks">1</td>
                        <td><a href="https://www.examtiger.com/mcq/java-programming-questions-answers/" target="__blank" rel="noreferrer">Java questions+answers </a> </td>
                    </tr>

                    <tr id="java">
                        <td id="idLinks">2</td>
                        <td><a href="https://www.javatpoint.com/java-mcq" target="__blank" rel="noreferrer">Java questions+answers 2</a></td>
                    </tr>

                    <tr id="java">
                        <td id="idLinks">3</td>
                        <td><a href="https://www.javamadesoeasy.com/2015/10/threadmulti-threading-quiz-in-java-mcq.html" target="__blank" rel="noreferrer">Java threads questions+answers</a> </td>
                    </tr>

                    <tr id="spring">
                        <td id="idLinks">4</td>
                        <td><a href="https://tutorialslink.com/mcq-quiz/java-spring-and-spring-boot-mcq-quiz-multiple-choice-questions-and-answers?page=1" target="__blank" rel="noreferrer">Spring questions+answers </a></td>
                    </tr>

                    <tr id="spring">
                        <td id="idLinks">5</td>
                        <td><a href="https://www.tutorialspoint.com/spring/spring_online_quiz.htm" target="__blank" rel="noreferrer">Spring questions+answers 2</a></td>
                    </tr>

                    <tr id="spring">
                        <td id="idLinks">6</td>
                        <td><a href="https://www.interviewmocks.com/spring-mcq/" target="__blank" rel="noreferrer">Spring questions+answers 3</a></td>
                    </tr>

                    <tr id="spring">
                        <td id="idLinks">7</td>
                        <td><a href="https://www.sanfoundry.com/1000-spring-questions-answers/#spring-web-flow-spring-mvc-spring-rest-spring-flex" target="__blank" rel="noreferrer">Spring MVC questions+answers</a></td>
                    </tr>
                    
                    <tr id="web">
                        <td id="idLinks">8</td>
                        <td><a href="http://www.allindiaexams.in/engineering/cse/typescript-mcq-quiz-typescript-online-test" target="__blank" rel="noreferrer">TypeScript questions+answers</a></td>
                    </tr>

                    <tr id="web">
                        <td id="idLinks">9</td>
                        <td><a href="https://www.javatpoint.com/reactjs-mcq" target="__blank" rel="noreferrer">React Js questions+answers</a></td>
                    </tr>
            </tbody>
          </table>
        </div>
    );
}

export default QuestionsLinks;
