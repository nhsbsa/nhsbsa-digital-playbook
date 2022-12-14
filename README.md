# NHSBSA Digital, Data and Technology Playbook

The NHSBSA Digital, Data and Technology Playbook contains documentation on how we work when delivering DDaT Services at the [NHS Business Services Authority][nhsbsa_homepage].

The published playbook is hosted on [Github pages][nhsbsa_digital_playbook]

## Quick start

### prerequisites

* [Node 16][node_js]

### Building the application

```bash
npm run build
```

### Running the application

```bash
npm start
```

## Documentation

This playbook uses [Eleventy][eleventy] to generate the static site, [Github actions][gh_actions] to deploy
the generated content, and [Github pages][gh_pages] to host.

## Contributions

We operate a [code of conduct](CODE_OF_CONDUCT.md) for all [contributors](CONTRIBUTING.md).

The playbook contains articles on [how to contribute][nhsbsa_digital_playbook_contribute]

## License

Released under the [Apache 2 license](LICENCE.txt).

[nhsbsa_homepage]: <https://www.nhsbsa.nhs.uk/>
[nhsbsa_digital_playbook]: <https://nhsbsa.github.io/nhsbsa-digital-playbook/>
[nhsbsa_digital_playbook_contribute]: <https://nhsbsa.github.io/nhsbsa-digital-playbook/>
[node_js]: <https://nodejs.org/en/>
[eleventy]: <https://www.11ty.dev/docs/>
[gh_actions]: <https://docs.github.com/en/actions>
[gh_pages]: <https://pages.github.com/>