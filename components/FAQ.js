import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';

const Strong = ({ children }) => (
  <strong className="font-bold text-temporalblue">{children}</strong>
);
const Link = ({ href, children }) => (
  <a href={href} className="text-temporalblue hover:text-blue-200 hover:underline">
    {children}
  </a>
);

const faqs = [
  {
    question: 'Is Temporal open source? Is there a hosted version?',
    answer: (
      <span>
        Yes,{' '}
        <Link href="https://github.com/temporalio/temporal/blob/master/LICENSE">MIT licensed</Link>.
        We have &gt;$1000b publicly listed companies using Temporal in production without paying us
        a dime. You can:{' '}
        <ul className="list-disc pl-4">
          <li className="ml-4">
            <Link href="https://github.com/temporalio/temporal">view our source here</Link> (give us
            a star!),
          </li>
          <li className="ml-4">
            <Link href="https://github.com/temporalio/docker-compose">run Temporal locally</Link>{' '}
            with Docker, and{' '}
          </li>
          <li className="ml-4">
            <Link href="https://docs.temporal.io/docs/server/production-deployment">
              contribute to our self hosting docs
            </Link>
            .
          </li>
        </ul>
        <span>
          If you want a fully managed version of Temporal, we are building out Temporal Cloud right
          now with select enterprise scale Design Partners.{' '}
          <Link href="https://us17.list-manage.com/survey?u=2334a0f23e55fd1840613755d&id=f1895b6f4a">
            Register your interest in Temporal Cloud here!
          </Link>
        </span>
      </span>
    )
  },
  {
    question: 'How does Temporal work under the hood?',
    answer: (
      <div>
        <p>
          The Temporal “System” consists of <span className="font-bold">Temporal Server</span> (run
          by Temporal Cloud, or self-hosted) orchestrating work with a fleet of{' '}
          <span className="font-bold">Temporal Workers</span> (operated by application developers)
          and <span className="font-bold">Temporal Clients</span> (embedded in applications), over
          gRPC.
        </p>
        <ul className="list-disc my-4 pl-8">
          <li>
            <Link href="https://docs.temporal.io/docs/server/introduction/">Temporal Server</Link>{' '}
            runs as a cluster of 4 horizontally scalable Go services with a pluggable{' '}
            <Link href="https://docs.temporal.io/docs/server/configuration#persistence">
              persistence
            </Link>{' '}
            layer (MySQL, PostgreSQL, or Cassandra), an integrated{' '}
            <Link href="https://docs.temporal.io/docs/system-tools/web-ui">Web UI</Link> and{' '}
            <Link href="https://docs.temporal.io/docs/system-tools/tctl">CLI</Link>, and optional{' '}
            <Link href="https://docs.temporal.io/docs/server/elasticsearch-setup">
              ElasticSearch
            </Link>{' '}
            visibility.
          </li>
          <li>
            <Link href="https://docs.temporal.io/docs/concepts/workers">Temporal Workers</Link> host
            application code consisting of 'fault oblivious'{' '}
            <Link href="https://docs.temporal.io/docs/concepts/workflows">Workflows</Link> that
            orchestrate idempotent{' '}
            <Link href="https://docs.temporal.io/docs/concepts/activities">Activities</Link>,
            written using polyglot{' '}
            <Link href="https://docs.temporal.io/application-development/">Temporal SDKs</Link>{' '}
            which persist and replay Workflow state in all failure and retry scenarios.
          </li>
          <li>
            <Link href="https://docs.temporal.io/docs/concepts/clients">Temporal Clients</Link>{' '}
            embedded within your app (route handlers or serverless functions) and can start, cancel,
            signal, and query individual Workflow Executions.
          </li>
        </ul>
        <p>
          Learn more:
          <ul className="list-disc pl-4">
            <li>
              <Link href="https://docs.temporal.io/docs/content/what-is-a-temporal-cluster">
                Read our docs on Temporal's architecture
              </Link>
            </li>
            <li>
              <Link href="https://docs.temporal.io/blog/workflow-engine-principles">
                Watch our CEO's 23 minute talk on our design principles
              </Link>
            </li>
            <li>
              Watch live code demos of our{' '}
              <Link href="https://www.youtube.com/playlist?list=PLl9kRkvFJrlRYHYaTPnsvE46szyMIZLdk">
                Go
              </Link>
              ,{' '}
              <Link href="https://www.youtube.com/playlist?list=PLl9kRkvFJrlQ8KsM6m9cFfCeQegq_B8x4">
                Java
              </Link>
              , and{' '}
              <Link href="https://www.youtube.com/playlist?list=PLl9kRkvFJrlTavecydpk9r6cF7qBmQJvb">
                TypeScript
              </Link>{' '}
              SDKs.
            </li>
            <li>
              <Link href="https://temporal.io/meetup">Ask questions at our monthly meetup</Link>
            </li>
            <li>
              Read other explanations from users and employees in{' '}
              <Link href="https://docs.temporal.io/docs/external-resources/">
                External Resources
              </Link>
              !
            </li>
          </ul>
        </p>
      </div>
    )
  },
  {
    question: (
      <span>
        When should I <span className="">NOT</span> use Temporal?
      </span>
    ),
    answer: (
      <div>
        <ul className="list-disc sm:pl-4">
          <li className="ml-4">
            <Strong>Real-time</Strong>: While task latency is an important advantage of Temporal
            compared to other workflow systems, Temporal is not a good fit for realtime usecases in
            gaming and streaming, because we optimize for <Strong>transactional consistency</Strong>{' '}
            over absolute lowest latency.
          </li>
          <li className="ml-4">
            <Strong>Non-Critical</Strong>: Temporal persists every state transition and retries
            failures by default. If you are sending "fire and forget" notifications, Temporal is
            overkill because the resiliency we provide is not needed.
          </li>
          <li className="ml-4">
            <Strong>Non-Developers</Strong>: Temporal is strongly opinionated about enabling{' '}
            <em>developers</em> to write <Strong>workflows as code</Strong> in general purpose
            languages. If you are not a developer, Temporal probably isn't the right fit for you.
            However if you are <em>building</em> low code automation tools and DSLs, that is one of
            the top use cases for Temporal!
          </li>
        </ul>
      </div>
    )
  },
  {
    question: 'What is your roadmap? When will there be a $MY_LANGUAGE SDK?',
    answer: (
      <span>
        <Strong>We do not publish a public roadmap</Strong>, but are very responsive to demand from
        our open source community and paying Design Partners. We currently have{' '}
        <Link href="https://docs.temporal.io/application-development">Go, Java, and PHP SDKs</Link>,
        with TypeScript SDK in public alpha. All development is fully open source and trackable on
        GitHub. <Link href="https://temporal.io/careers">We are actively hiring</Link> if you'd like
        to work on great open source!
      </span>
    )
  },
  {
    question: 'I still have more questions!',
    answer: (
      <span>
        Join <Link href="https://temporal.io/meetup">our monthly meetup</Link>, ask questions in{' '}
        <Link href="https://community.temporal.io/">our forum</Link> and{' '}
        <Link href="https://temporal.io/slack">Slack</Link>, and{' '}
        <Link href="https://twitter.com/temporalio">ask us on Twitter</Link>!
      </span>
    )
  }
];

const FAQ = () => {
  return (
    <section className="sm:pb-28 bg-gray-700">
      <div className="max-w-7xl mx-auto py-12 sm:py-28 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-bold sm:text-6xl" id="FAQ">
            Frequently Asked Questions
          </h2>
          <dl className="mt-6 space-y-6">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex space-x-5 items-center">
                        <span className="ml-5 h-7 flex items-center">
                          <svg
                            className={`${open ? 'rotate-0' : '-rotate-90'}
                            h-6 w-6 transform transition-transform`}
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </span>
                        <span className="text-left text-lg font-semibold md:text-2xl">
                          {faq.question}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition
                      enter="transition-opacity duration-75"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0">
                      <Disclosure.Panel as="dd" className="mt-2">
                        <p className="md:text-lg leading-8 pl-16">{faq.answer}</p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>

      <div className="py-10">
        <p className="text-center text-2xl capitalize font-bold tracking-wide">Backed by</p>
        <div className="flex-1 flex">
          <div className="flex-1 flex items-center justify-center ">
            <a href="https://amplifypartners.com/portfolio-news/our-investment-in-temporal/">
              <img
                style={{ filter: 'brightness(1.5) grayscale(1)' }}
                className="my-2 lg:my-8 h-24 w-24 lg:h-32 lg:w-32 object-contain transform hover:scale-125 transition-transform"
                src="/logos/logo-amplify.png"
                alt="vc"></img>
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center ">
            <a href="https://medium.com/sequoia-capital/temporal-the-promise-of-more-resilient-applications-87c46469d74a">
              <img
                style={{ filter: 'brightness(1.5) grayscale(1)' }}
                className="my-2 lg:my-8 h-24 w-24 lg:h-32 lg:w-32 object-contain transform hover:scale-125 transition-transform"
                src="/logos/logo-sequoia.png"
                alt="vc"></img>
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              style={{ filter: 'brightness(3.5) grayscale(1)' }}
              className="my-2 lg:my-8 h-24 w-24 lg:h-32 lg:w-32 object-contain"
              src="/logos/logo-madrona.png"
              alt="vc"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
