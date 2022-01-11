---
layout: article
title: "Licensing software or code"
tags: [dev, dev_docs]
order:
  dev_docs: 2
---
Everything we produce or use, whether open or closed, should have an appropriate licence applied (as indicated by the [service manual][gov_service_manual_licence]). Without a licence, others (even within the NHSBSA) have no way of knowing for sure if they can use it, or how.

At the NHSBSA, we use the [Apache 2 License][licence_apache2].

## Applying the Apache 2 License to our work

### Each repository should include a licence file

This should be called LICENCE or LICENCE.md. “License” is the U.S. English spelling and should not be used. Gitlab/GitHub will still show licence details for the British English spelling.

Make sure the licence content is included in full, including the title “APACHE LICENSE, VERSION 2.0”, so that readers are quickly able to see what licence is being used.

### Use the correct copyright notice

The Copyright is Crown Copyright. You can put “NHS Business Services Authority” in brackets. For example:

```text [g1:Text]
Copyright 2022 Crown Copyright (NHS Business Services Authority)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

```java [g1:Java]
/*
  Copyright 2022 Crown Copyright (NHS Business Services Authority)

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
```

```javascript [g1:Javascript]
/*
  Copyright 2022 Crown Copyright (NHS Business Services Authority)

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
```

The year should be the year the code was first published. Where the code is continually updated with significant changes, the year can be shown as a period from first to most recent update (e.g. 2015-2017).

### Add licence in project descriptors

Many build tools rely on project descriptors to provide machine readable information about a component. E.g. Maven uses the pom.xml file. 
Add licence information to the project descriptors.

```xml [g1:Maven]
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
    ...
    <licenses>
        <license>
            <name>The Apache Software License, Version 2.0</name>
            <url>http://www.apache.org/licenses/LICENSE-2.0.txt</url>
            <distribution>repo</distribution>
        </license>
    </licenses>
    ...
</project>
```

```json [g1:NPM]
{
  ...
  "license": "Apache-2.0"
  ...
}
```

> __Note that NPM uses the [SPDX licence classifier][licence_spdx] for [Apache 2][licence_spdx_apache2].__

## OGL v3

We use Open Government Licence v3 for our published content. User interfaces need a link to the [OGL V3 licence agreement][licence_ogl3] in the footer.

[gov_service_manual_licence]: <https://www.gov.uk/service-manual/technology/making-source-code-open-and-reusable#licensing-your-code>
[licence_apache2]: <https://www.apache.org/licenses/LICENSE-2.0>
[licence_ogl3]: <https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/>
[licence_spdx]: <https://spdx.org/licenses/>
[licence_spdx_apache2]: <https://spdx.org/licenses/Apache-2.0.html>
