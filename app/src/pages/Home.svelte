<script>
  import InfoCard from "../components/InfoCard.svelte";

  let Intro = {
    icon: "fa-search",
    smallTitle: "YB Hackathon 2020",
    bigTitle: "Welcome",
    border: "success",
    links: [
      {
        text: "Github Repository",
        href: "https://github.com/faxg/ybhackathon-starter",
      },
      {
        text: "Azure Static Web Apps (SWA)",
        href: "https://azure.microsoft.com/en-us/services/app-service/static/",
      },
      {
        text: "VS.code Extension ",
        href: "https://aka.ms/savscode",
      },
    ],
  };

  let Services = {
    icon: "fa-list",
    smallTitle: "Azure Services",
    bigTitle: "Find Azure Services for your Idea",
    border: "primary",
  };

  let LearnerBadge = {
    icon: "fa-certificate",
    smallTitle: "Azure Heroes",
    bigTitle: "Claim your 'Learner' Azure Hero Badge",
    border: "info",
    links: [
      {
        text: "More Info on Azure Heroes...",
        href: "https://www.microsoft.com/skills/azureheroes",
      },
    ],
  };

  let learningAndSupport = {
    icon: "fa-graduation-cap",
    smallTitle: "Learning And Support",
    bigTitle: "Learn More and get Help...",
    border: "info",
    links: [
      {
        text: "Microsoft Learn",
        href: "https://docs.microsoft.com/en-us/learn/",
      },
      { text: "Learn TV", href: "https://docs.microsoft.com/en-us/learn/tv/" },
      { text: "Dev.to", href: "https://dev.to/" },
      {
        text: "Stackoverflow",
        href: "https://stackoverflow.com/questions/tagged/azure",
      },
    ],
  };

  let starterTemplate = {
    icon: "fa-rocket",
    smallTitle: "Azure Starter Template",
    bigTitle: "How to use this for your project",
    border: "info",
    links: [
      {
        text: "Learn more about Azure Static Web Apps (SWA)",
        href: "https://aka.ms/staticwebapps",
      },
      {
        text: "Azure Functions Reference for Node/JavaScript",
        href: "https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node",
      },
      {
        text: "Azure Serverless community library - JavaScript ",
        href: "https://serverlesslibrary.net/?language=JavaScript",
      },
    ],
  };
</script>

<style>
  .col-sm-12,
  .col-md-6,
  .col-lg-4,
  .col-xl-4 {
    padding-top: 10px;
  }
  .badge-icon,
  .qr-code {
    height: 128px;
  }
</style>

<div class="row">
  <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-justify-content-center">
    <InfoCard props={Intro}>
      Welcome to the YB Hackathon 2020 Azure Starter Template. You'll find
      information on:
      <ul>
        <li>Azure Services you could use</li>
        <li>How to claim your "Learner" Azure Hero Badge</li>
        <li>How to find Learning material and get support</li>
        <li>How to fork & use this Starter Template</li>
        <li>
          How to share your PII with us (a.k.a. sign up for
          <code>Microsoft.source</code>
          newsletter)
        </li>
      </ul>
    </InfoCard>
  </div>

  <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4  justify-content-center">
    <InfoCard props={Services}>
      You may already have an idea for a project or a challenge. Here are some
      useful Azure Services:
      <ul>
        <li>
          <a
            href="https://docs.microsoft.com/en-us/azure/cognitive-services/">Azure
            Cognitive Services</a>
        </li>
        <li>
          <a
            href="https://azure.microsoft.com/en-us/services/machine-learning/">Azure
            Machine Learning</a>
        </li>
        <li>
          <a href="https://notebooks.azure.com/"> Azure Jupyter Notebooks</a>
        </li>
        <li>
          <a
            href="https://azure.microsoft.com/en-us/services/app-service/containers/">Azure
            App Service - Web App for Containers</a>
        </li>
        <li>
          <a
            href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-function-vs-code?pivots=programming-language-javascript">Azure
            Functions (Serverless)</a>
        </li>
        <li>
          <a
            href="https://azure.microsoft.com/en-us/services/app-service/static/">Azure
            Static Web Apps (SWA)</a>
        </li>
        <li>
          <a href="https://azure.microsoft.com/en-us/services/cosmos-db/">Azure
            CosmosDB</a>
        </li>
        <li>
          <a href="https://azure.microsoft.com/en-us/overview/iot/">Azure IoT</a>
        </li>
      </ul>
    </InfoCard>
  </div>

  <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 justify-content-center">
    <InfoCard props={LearnerBadge}>
      You can claim your Azure Hero Learner Badge here.
      <br/>
      <span>
        <img alt="Azure Heroes Learner" class="img img-fluid badge-icon" src="/img/learner.png" />
        <img alt="Azure Heroes QR" class="img img-fluid qr-code" src="/img/learner-qr.png" />
      </span>
    </InfoCard>
  </div>

  <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 justify-content-center">
    <InfoCard props={learningAndSupport}>
      Find help online. We have lots of articles, tutorials and videos
      available.

      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          title="Intro to Static Web Apps"
          class="embed-responsive-item"
          src="https://www.youtube.com/embed/gWEYfyLu1ew"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen />
      </div>
    </InfoCard>
  </div>

  <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8 justify-content-center">
    <InfoCard props={starterTemplate}>
      This is the
      <b>YB Hackathon Starter</b>
      on Azure.&nbsp;
      <br />
      You can use this as a starting point for your own web application. It's
      <b>Full-Stack Javascript</b>
      (for now) :
      <ul>
        <li>
          <b>Frontend</b>: website that contains links to docs on the
          Event and selected Azure Cloud Services. Written in
          <a href="https://svelte.dev/">Svelte</a>, but many frameworks are
          supported (Angular, React, ...). Just build your own frontend in the
          <code>/app</code>
          and tell Azure where to find the
          <code>npm build</code>
          results. (e.g. /app/public/build)
        </li>
        <li>
          <b>API</b>: Serverless (Azure Functions) backend
          <code>/api</code>. Implement your serverless backend in
          JavaScript/Typescript.
        </li>
      </ul>
      You can clone & deploy this to Azure in 5 minutes. You'll get:
      <img
        class="img-fluid"
        width="100%"
        alt="SWA Overview"
        src="https://azurecomcdn.azureedge.net/cvt-4abbf0604519d6747e8628e7d4a627c7bc7d78cea01076877c54698df471f916/images/page/services/app-service/static/value-prop-2.png" />
    </InfoCard>
  </div>
</div>
