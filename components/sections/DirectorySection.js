import React, { PureComponent } from "react";
import Directory from "../directory/Directory";
import DirectoryItem from "../directory/DirectoryItem";

class DirectorySection extends PureComponent {
  render() {
    return (
      <div>
        <h2>Directory</h2>
        <p>
          Trying to reach out, but not sure who you should talk to? Look no
          further!
        </p>
        <p>
          Bear in mind, though, that like everything else, our departments are
          all-volunteer. Depending on communications backlog and the number of
          people we have on a given address, turnaround could be anywhere from a
          few minutes to a couple days.
        </p>
        <Directory>
          <DirectoryItem
            text="If you have a burning question for our Local Council Leadership"
            links={[
              {
                label: "localcouncil@eastbaydsa.org",
                href: "mailto:localcouncil@eastbaydsa.org"
              }
            ]}
          />
          <DirectoryItem
            text="New to EBDSA, and not sure where to plug in?"
            links={[
              {
                label: "newmember@eastbaydsa.org",
                href: "mailto:newmember@eastbaydsa.org"
              }
            ]}
          />
          <DirectoryItem
            text="For inquiries about events"
            links={[
              {
                label: "events@eastbaydsa.org",
                href: "mailto:events@eastbaydsa.org"
              }
            ]}
          />
          <DirectoryItem
            text="The memes of production"
            links={[
              {
                label: "communications@eastbaydsa.org",
                href: "mailto:communications@eastbaydsa.org"
              }
            ]}
          />
          <DirectoryItem
            text="Educational events and opportunities"
            links={[
              {
                label: "education@eastbaydsa.org",
                href: "mailto:education@eastbaydsa.org"
              }
            ]}
          />
          <DirectoryItem
            text="Make sure people can find their lane"
            links={[
              {
                label: "internalorganizing@eastbaydsa.org",
                href: "mailto:internalorganizing@eastbaydsa.org"
              }
            ]}
          />
          <DirectoryItem
            text="Win friends, irritate neoliberals"
            links={[
              {
                label: "externalorganizing@eastbaydsa.org",
                href: "mailto:externalorganizing@eastbaydsa.org"
              }
            ]}
          />
          <DirectoryItem
            text="Single. Payer. Is. Our. Fight."
            links={[
              {
                label: "singlepayer@eastbaydsa.org",
                href: "mailto:singlepayer@eastbaydsa.org"
              }
            ]}
          />
          <DirectoryItem
            text="To refuse, resist and otherwise get the goods"
            links={[
              {
                label: "directaction@eastbaydsa.org",
                href: "mailto:directaction@eastbaydsa.org"
              }
            ]}
          />
          <DirectoryItem
            text="Got a good shot?"
            links={[
              {
                label: "photos@eastbaydsa.org",
                href: "mailto:photos@eastbaydsa.org"
              }
            ]}
          />
          <DirectoryItem
            text="Until capitalism is abolished (reimbursements, budgets, tax status questions and other money-related logistics)"
            links={[
              {
                label: "finance@eastbaydsa.org",
                href: "mailto:finance@eastbaydsa.org"
              }
            ]}
          />
          <DirectoryItem
            text="Oh, yeah. We’re online."
            links={[
              {
                label: "facebook.com/eastbaydsa",
                href: "http://facebook.com/eastbaydsa"
              },
              {
                label: "twitter.com/DSAEastBay",
                href: "http://twitter.com/DSAEastBay"
              }
            ]}
          />
        </Directory>
      </div>
    );
  }
}

export default DirectorySection;