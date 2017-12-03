import React, { PureComponent } from "react";
import SideBar from "../SideBar";
import Figure from "../Figure";

class WhySection extends PureComponent {
  render() {
    return (
      <div>
        <h2>Why are we here?</h2>
        <p>
          DSA’s surge in membership is part of the post election reality, a
          recognition of the crisis in American politics from healthcare to DACA
          to the EPA to Nazis marching in Charlottesville. More and more people
          are fed up with this system that seems to benefit no one but the rich
          and powerful. Young people are looking around and seeing that the
          planet we’ve inherited is falling apart, and that capitalism has
          nothing to offer except debt, depression, and wage slavery.
        </p>
        <SideBar title="A simple drink of water" style="purple">
          <p>
            When you lean over a water fountain, you have a right to expect that
            it delivers clean, safe water for anyone and everyone. It should not
            be a segregated service. It should not be a form of means-tested
            charity for the needy, or run through decaying lead pipes. Water is
            life, water is precious, and water is not something to be
            privatized. It is a public good.
          </p>
          <p>
            We seek to take more parts of the economy out of the hands of
            profit-seekers, and instead treat them like you might treat clean
            water from a public fountain. (That’s what we mean when we talk
            about decommodifying something.)
          </p>
          <p>
            There are many other examples of profit motives creating screwed-up
            situations, like privately owned prisons or price-gouging during
            disasters. That’s part of why we’re socialists.
          </p>
        </SideBar>
        <p>
          The powers that be can’t and won’t deliver a world of peace, freedom,
          and human dignity. So we’re going to have to do that ourselves.
        </p>
        <p>
          Democratic Socialism starts from the basic belief that every human
          life is important, and that we have a right to make decisions about
          the world we create together. The basic needs of life—clean air,
          water, food, shelter, education—should be considered fundamental human
          rights, not an opportunity for someone to make a buck.
        </p>
        <p>
          It’s important to recognize that exploitation and abuse aren’t
          occasional side-effects of capitalism. Instead, they’re actually
          necessary to its functioning. Young people are learning through their
          own experiences what Marx observed 150 years ago: that the world’s
          monetary wealth is accumulated by taking advantage of other people’s
          need to survive.
        </p>
        <Figure>
          We organize for an economy (and a society) run democratically to meet
          human needs, not for private profit.
        </Figure>
        <p>
          We organize for an economy (and a society) run democratically to meet
          human needs, not for private profit. In the short term, we aim to win
          living wages for all workers; in the long term, we aim to end the wage
          system altogether. In the short term, we endeavor to put an end to
          police and anti-immigrant violence; in the long term, we envision a
          world in which prisons and borders are obsolete. Now and in the
          future, we seek to guarantee quality healthcare, housing, environment,
          and education for all.
        </p>
        <p>
          To get there, our strategy is to build working-class political power
          from the grassroots. We are organizing face-to-face in our
          neighborhoods and workplaces, in churches and in dive bars. (Many of
          our new members have joined up after a canvasser knocked on their door
          and had a deeply real conversation with them.) We’re forging a
          democratic, volunteer, and member-run network of accountable
          relationships, so we can take collective action again and again.
        </p>
        <p>
          <strong>That’s real power.</strong> We use it to defend each other and
          take on bosses, landlords, and political elites; we aim to win office,
          change the terms of political debate, and move our society towards
          justice.
        </p>
      </div>
    );
  }
}

export default WhySection;