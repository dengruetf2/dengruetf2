{
  "build": {
    "markdownEngineName": "markdig",
    "content": [
      {
        "src": "articles",
        "dest": ".",
        "files": [
          "**/*.md",
          "**/*.yml"
        ],
        "exclude": [
          "iot-edge/**",
          "**/_themes/**",
          "**/includes/**",
          "**/obj/**",
          "**/*.graffle",
          "healthcare-apis/**"
        ]
      },
      {
        "group": "grp-iot-edge",
        "src": "articles/iot-edge",
        "dest": "./iot-edge/",
        "files": [
          "**/*.md",
          "**/*.yml"
        ],
        "exclude": [
          "**/_themes/**",
          "**/includes/**",
          "**/obj/**"
        ]
      },
      {
        "group": "healthcare-apis",
        "src": "articles/healthcare-apis",
        "dest": "./healthcare-apis/",
        "files": [
          "**/*.md",
          "**/*.yml"
        ],
        "exclude": [
          "**/_themes/**",
          "**/includes/**",
          "**/obj/**"
        ]
      },
      {
        "src": "bread",
        "dest": "bread",
        "files": [
          "**/*.md",
          "**/*.yml"
        ],
        "exclude": [
          "**/_themes/**",
          "**/includes/**",
          "**/obj/**"
        ]
      }
    ],
    "resource": [
      {
        "src": "articles",
        "dest": ".",
        "files": [
          "**/*.gif",
          "**/*.jpeg",
          "**/*.jpg",
          "**/*.png",
          "**/*.svg"
        ],
        "exclude": [
          "iot-edge/**",
          "**/_themes/**",
          "**/obj/**",
          "healthcare-apis/**"
        ]
      },
      {
        "group": "grp-iot-edge",
        "src": "articles/iot-edge",
        "dest": "./iot-edge/",
        "files": [
          "**/*.gif",
          "**/*.jpeg",
          "**/*.jpg",
          "**/*.png",
          "**/*.svg"
        ],
        "exclude": [
          "**/_themes/**",
          "**/obj/**"
        ]
      },
      {
        "group": "healthcare-apis",
        "src": "articles/healthcare-apis",
        "dest": "./healthcare-apis/",
        "files": [
          "**/*.gif",
          "**/*.jpeg",
          "**/*.jpg",
          "**/*.png",
          "**/*.svg"
        ],
        "exclude": [
          "**/_themes/**",
          "**/obj/**"
        ]
      },
      {
        "src": null,
        "dest": null,
        "files": [
          "includes/**/*.gif",
          "includes/**/*.jpeg",
          "includes/**/*.jpg",
          "includes/**/*.png",
          "includes/**/*.svg"
        ],
        "exclude": [
          "**/_themes/**",
          "**/obj/**"
        ]
      }
    ],
    "groups": {
      "grp-iot-edge": {
        "dest": "destiotedge",
        "moniker_range": ">=iotedge-2018-06"
      }
    },
    "overwrite": [],
    "externalReference": [],
    "globalMetadata": {
      "_op_documentIdPathDepotMapping": {
        "articles/iot-central/": {
          "depot_name": "MSDN.microsoft-iot-central",
          "folder_relative_path_in_docset": "articles"
        }
      },
      "brand": "azure",
      "breadcrumb_path": "/azure/bread/toc.json",
      "feedback_product_url": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
      "feedback_system": "None",
      "searchScope": [
        "Azure"
      ],
      "recommendations": true,
      "uhfHeaderId": "azure",
      "ms.suite": "office",
      "contributors_to_exclude": [
        "atookey",
        "chbain",
        "Court72",
        "deneha",
        "denrea",
        "DuncanmaMSFT",
        "garycentric",
        "GitHubber17",
        "hexiaokai",
        "itechedit",
        "Ja-Dunn",
        "Jak-MS",
        "jborsecnik",
        "john-par",
        "jomolnar",
        "KatieCumming",
        "Kellylorenebaker",
        "kiwhit",
        "ktoliver",
        "Lisaco88",
        "MattGLaBelle",
        "meganbradley",
        "megvanhuygen",
        "openpublishingbuild",
        "PMEds28",
        "PRmerger",
        "PRMerger17",
        "PRMerger-2",
        "PRMerger3",
        "PRMerger4",
        "PRMerger5",
        "PRMerger9",
        "rjagiewich",
        "rmca14",
        "Saisang",
        "sdwheeler",
        "ShannonLeavitt",
        "ShawnJackson",
        "shawnmariejones",
        "TedA-M",
        "tfosmark",
        "TimShererWithAquent",
        "tiburd",
        "trishamc",
        "ttorble",
        "tysonn",
        "v-albemi",
        "v-andreaco",
        "v-anpasi",
        "v-ccolin",
        "v-dansch",
        "v-dihans",
        "v-rihow",
        "v-shils",
        "v-shmck",
        "v-thepet"
      ],
      "disable_contribution_on_translation_quality": [
        "MTE95",
        "MTE75",
        "MT",
        "Blank"
      ]
    },
    "fileMetadata": {
      "author": {
        "articles/advisor/*.md": "saket-ms",
        "articles/aks/**/*.md": "zr-msft",
        "articles/ansible/**/*.md": "TomArcherMsft",
        "articles/app-service/*.md": "cephalin",
        "articles/app-service/containers/*.md": "cephalin",
        "articles/app-service/environment/*.md": "madsd",
        "articles/app-service/scripts/*.md": "cephalin",
        "articles/app-service-mobile/**/*.md": "elamalani",
        "articles/automanage/*md": "daberry",
        "articles/automation/**/*.md": "sgsneha",
        "articles/azure-arc/**/*.md": "JnHs",
        "articles/azure-arc/servers/**/*.md": "JnHs",
        "articles/azure-functions/**/*.md": "ggailey777",
        "articles/azure-fluid-relay/**/*.md": "hickeys",
        "articles/azure-government/**/*.md": "stevevi",
        "articles/azure-monitor/containers/**/*.md": "bwren",
        "articles/azure-monitor/insights/container-insights*.md": "bwren",
        "articles/azure-monitor/log-query/*.md": "bwren",
        "articles/azure-monitor/platform/*.md": "rboucher",
        "articles/azure-monitor/app/*.md": "bwren",
        "articles/azure-monitor/agents/*.md": "bwren",
        "articles/azure-monitor/alerts/*.md": "rboucher",
        "articles/azure-monitor/autoscale/*.md": "rboucher",
        "articles/azure-monitor/containers/*.md": "bwren",
        "articles/azure-monitor/essentials/*.md": "rboucher",
        "articles/azure-monitor/*.md": "bwren",
        "articles/azure-monitor/insights/*.md": "bwren",
        "articles/azure-monitor/logs/*.md": "rboucher",
        "articles/azure-monitor/visualize/**/*.md": "rboucher",
        "articles/azure-monitor/vm/*.md": "bwren",
        "articles/azure-portal/**/*.md": "JnHs",
        "articles/azure-portal/**/*.yml": "JnHs",
        "articles/azure-relay/*.md": "spelluru",
        "articles/azure-resource-manager/*.md": "tfitzmac",
        "articles/azure-resource-manager/custom-providers/**/*.md": "tfitzmac",
        "articles/azure-resource-manager/managed-applications/**/*.md": "tfitzmac",
        "articles/azure-resource-manager/management/**/*.md": "tfitzmac",
        "articles/azure-resource-manager/templates/**/*.md": "mumian",
        "articles/azure-resource-manager/bicep/**/*.md": "mumian",
        "articles/azure-resource-manager/troubleshooting/**/*.md": "mumian",
        "articles/partner-solutions/**/*.md": "tfitzmac",
        "articles/azure-vmware/**/*.md": "suzizuber",
        "articles/backup/**/*.md": "v-amallick",
        "articles/backup/**/*.yml": "v-amallick",
        "articles/baremetal-infrastructure/**/*.md": "dineshga",
        "articles/batch/**/*.md": "prkannap",
        "articles/blockchain/**/*.md": "PatAltimore",
        "articles/chef/**/*.md": "TomArcherMsft",
        "articles/applied-ai-services/**/*.md": "mrbullwinkle",
        "articles/cognitive-services/**/*.md": "PatrickFarley",
        "articles/cognitive-services/Anomaly-Detector/**/*.md": "mrbullwinkle",
        "articles/cognitive-services/Bing-Autosuggest/**/*.md": "aahill",
        "articles/cognitive-services/Bing-Custom-Search/**/*.md": "aahill",
        "articles/cognitive-services/Bing-Entities-Search/**/*.md": "aahill",
        "articles/cognitive-services/Bing-Image-Search/**/*.md": "aahill",
        "articles/cognitive-services/bing-local-business-search/**/*.md": "aahill",
        "articles/cognitive-services/Bing-News-Search/**/*.md": "aahill",
        "articles/cognitive-services/Bing-Spell-Check/**/*.md": "aahill",
        "articles/cognitive-services/Bing-Video-Search/**/*.md": "aahill",
        "articles/cognitive-services/bing-visual-search/**/*.md": "aahill",
        "articles/cognitive-services/Bing-Web-Search/**/*.md": "aahill",
        "articles/cognitive-services/Computer-vision/**/*.md": "PatrickFarley",
        "articles/cognitive-services/Content-Moderator/**/*.md": "PatrickFarley",
        "articles/cognitive-services/Custom-Vision-Service/**/*.md": "PatrickFarley",
        "articles/cognitive-services/Face/**/*.md": "PatrickFarley",
        "articles/applied-ai-services/form-recognizer/**/*.md": "laujan",
        "articles/cognitive-services/LUIS/**/*.md": "aahill",
        "articles/applied-ai-services/metrics-advisor/**/*.md": "mrbullwinkle",
        "articles/cognitive-services/personalizer/**/*.md": "edjez",
        "articles/cognitive-services/QnAMaker/**/*.md": "mrbullwinkle",
        "articles/cognitive-services/Speech-Service/**/*.md": "eric-urban",
        "articles/cognitive-services/language-service/**/*.md": "aahill",
        "articles/cognitive-services/Translator/**/*.md": "laujan",
        "articles/connectors/*.md": "ecfan",
        "articles/container-instances/**/*.md": "macolso",
        "articles/container-registry/**/*.md": "dlepow",
        "articles/data-lake-analytics/*.md": "xujxu",
        "articles/defender-for-cloud/*.md": "elazark",
        "articles/defender-for-iot/organizations/*.md": "shhazam-ms",
        "articles/defender-for-iot/device-builders/*.md": "shhazam-ms",
        "articles/dev-spaces/**/*.md": "zr-msft",
        "articles/devtest-labs/**/*.md": "j-martens",
        "articles/event-grid/**/*.md": "spelluru",
        "articles/event-hubs/**/*.md": "spelluru",
        "articles/governance/*.md": "georgewallace",
        "articles/governance/blueprints/**/*.md": "georgewallace",
        "articles/governance/management-groups/**/*.md": "rthorn17",
        "articles/governance/policy/**/*.md": "georgewallace",
        "articles/governance/resource-graph/**/*.md": "georgewallace",
        "articles/hdinsight/*.md": "JasonWHowell",
        "articles/hdinsight/kafka/*.md": "arnabganguly",
        "articles/hdinsight/**/*.md": "JasonWHowell",
        "articles/jenkins/**/*.md": "TomArcherMsft",
        "articles/lab-services/**/*.md": "j-martens",
        "articles/lighthouse/**/*.md": "JnHs",
        "articles/logic-apps/*.md": "ecfan",
        "articles/machine-learning/*.md": "cjgronlund",
        "articles/machine-learning/classic/*.md": "cjgronlund",
        "articles/marketplace/**/*.md": "mingshen-ms",
        "articles/media-services/**/**/*.md": "Juliako",
        "articles/media-services/**/*.md": "Juliako",
        "articles/search/*.md": "HeidiSteen",
        "articles/notebooks/*.md": "j-martens",
        "articles/service-bus-messaging/*.md": "spelluru",
        "articles/service-fabric/*.md": "sukanyamsft",
        "articles/service-health/*.md": "rboucher",
        "articles/site-recovery/*.md": "v-ssenthilna",
        "articles/stream-analytics/*.md": "jasonwhowell",
        "articles/terraform/**/*.md": "TomArcherMsft",
        "articles/virtual-machines/*.md": "cynthn",
        "articles/virtual-machines/linux/*.md": "cynthn",
        "articles/virtual-machines/windows/*.md": "cynthn",
        "articles/virtual-machines-scale-sets/*.md": "ju-shim",
        "articles/azure-video-analyzer/video-analyzer-for-media-docs/*.md": "Juliako",
        "articles/azure-video-analyzer/video-analyzer-docs/*.md": "Juliako",
        "articles/azure-video-analyzer/video-analyzer-docs/edge/*.md": "Juliako",
        "articles/azure-video-analyzer/video-analyzer-docs/cloud/*.md": "Juliako"
      },
      "featureFlags": {
        "articles/**/*.md": [
          "show_learn_banner"
        ],
        "articles/active-directory/**/*.md": [
          "binaryRatingUpdate"
        ]
      },
      "feedback_product_url": {
        "articles/*.md": "https://feedback.azure.com/d365community/forum/b822bb63-8b26-ec11-b6e6-000d3a4f0789",
        "articles/active-directory/**/*.md": "https://docs.microsoft.com/azure/active-directory/fundamentals/support-help-options",
        "articles/active-directory/develop/*.md": "https://docs.microsoft.com/azure/active-directory/develop/developer-support-help-options",
        "articles/active-directory-b2c/**/*.md": "https://docs.microsoft.com/azure/active-directory/develop/developer-support-help-options",
        "articles/active-directory-domain-services/**/*.md": "https://feedback.azure.com/d365community/forum/22920db1-ad25-ec11-b6e6-000d3a4f0789",
        "articles/advisor/**/*.md": "https://feedback.azure.com/d365community/forum/44a8566e-0525-ec11-b6e6-000d3a4f0858",
        "articles/aks/**/*.md": "https://feedback.azure.com/d365community/forum/aabe212a-f724-ec11-b6e6-000d3a4f0da0",
        "articles/analysis-services/**/*.md": "https://feedback.azure.com/d365community/forum/d92323a0-0525-ec11-b6e6-000d3a4f0858",
        "articles/ansible/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/api-management/**/*.md": "https://feedback.azure.com/d365community/forum/e808a70c-ff24-ec11-b6e6-000d3a4f0858",
        "articles/application-gateway/**/*.md": "https://feedback.azure.com/d365community/forum/8ae9bf04-8326-ec11-b6e6-000d3a4f0789?c=8d429912-8326-ec11-b6e6-000d3a4f0789",
        "articles/application-insights/**/*.md": "https://feedback.azure.com/d365community/forum/8849e04d-1325-ec11-b6e6-000d3a4f09d0",
        "articles/app-service/**/*.md": "https://feedback.azure.com/d365community/forum/b09330d1-c625-ec11-b6e6-000d3a4f0f1c",
        "articles/app-service-mobile/**/*.md": "https://github.com/Azure/azure-mobile-apps/issues",
        "articles/automation/**/*.md": "https://feedback.azure.com/d365community/forum/8ddd03a2-0225-ec11-b6e6-000d3a4f0858",
        "articles/availability-zones/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/azure-app-configuration/**/*.md": "https://github.com/Azure/AppConfiguration/issues",
        "articles/azure-cache-for-redis/**/*.md": "https://feedback.azure.com/d365community/forum/a96a82f3-0c25-ec11-b6e6-000d3a4f07b8",
        "articles/azure-databricks/**/*.md": "https://feedback.azure.com/d365community/forum/2efba7dc-ef24-ec11-b6e6-000d3a4f0da0",
        "articles/azure-functions/**/*.md": "https://feedback.azure.com/d365community/forum/9df02822-f224-ec11-b6e6-000d3a4f0da0",
        "articles/azure-government/**/*.md": "",
        "articles/azure-maps/**/*.md": "https://feedback.azure.com/d365community/forum/fc834083-0925-ec11-b6e6-000d3a4f09d0",
        "articles/azure-monitor/**/*.md": "https://feedback.azure.com/d365community/forum/3887dc70-2025-ec11-b6e6-000d3a4f09d0",
        "articles/azure-monitor/app/**/*.md": "https://feedback.azure.com/d365community/forum/8849e04d-1325-ec11-b6e6-000d3a4f09d0",
        "articles/azure-monitor/log-query/**/*.md": "https://feedback.azure.com/d365community/forum/aa68334e-1925-ec11-b6e6-000d3a4f09d0",
        "articles/azure-percept/**/*.md": "https://feedback.azure.com/d365community/forum/4a4c60f9-4e4d-ec11-8f8e-0022481f2bb0",
        "articles/azure-monitor/platform/**/alert-*.md": "https://feedback.azure.com/d365community/forum/3887dc70-2025-ec11-b6e6-000d3a4f09d0",
        "articles/azure-portal/**/*.md": "https://feedback.azure.com/d365community/forum/a222eda7-2425-ec11-b6e6-000d3a4f09d0",
        "articles/azure-portal/supportability/**/*.md": "https://feedback.azure.com/d365community/forum/a222eda7-2425-ec11-b6e6-000d3a4f09d0",
        "articles/azure-relay/**/*.md": "https://feedback.azure.com/d365community/forum/7c0a897d-2125-ec11-b6e6-000d3a4f0f84",
        "articles/azure-resource-manager/**/*.md": "https://feedback.azure.com/d365community/forum/9a0ece70-ff24-ec11-b6e6-000d3a4f07b8",
        "articles/azure-signalr/**/*.md": "https://feedback.azure.com/d365community/forum/819c820b-0725-ec11-b6e6-000d3a4f07b8",
        "articles/azure-stack/**/*.md": "https://feedback.azure.com/d365community/forum/ef24cacb-0725-ec11-b6e6-000d3a4f07b8",
        "articles/azure-sql/*.md": "https://feedback.azure.com/d365community/forum/04fe6ee0-3b25-ec11-b6e6-000d3a4f0da0",
        "articles/azure-sql/database/**/*.md": "https://feedback.azure.com/d365community/forum/04fe6ee0-3b25-ec11-b6e6-000d3a4f0da0",
        "articles/azure-sql/virtual-machines/**/*.md": "https://feedback.azure.com/d365community/forum/04fe6ee0-3b25-ec11-b6e6-000d3a4f0da0",
        "articles/azure-sql/managed-instance/**/*.md": "https://feedback.azure.com/d365community/forum/a99f7006-3425-ec11-b6e6-000d3a4f0f84",
        "articles/azure-vmware/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/backup/**/*.md": "https://feedback.azure.com/d365community/forum/153aa817-0725-ec11-b6e6-000d3a4f0858",
        "articles/batch/**/*.md": "https://feedback.azure.com/d365community/forum/7462aa60-0c25-ec11-b6e6-000d3a4f07b8",
        "articles/batch-ai/**/*.md": "https://feedback.azure.com/d365community/forum/31e95054-0c25-ec11-b6e6-000d3a4f07b8",
        "articles/biztalk-services/**/*.md": "https://feedback.azure.com/d365community/forum/6b0c7198-0c25-ec11-b6e6-000d3a4f07b8",
        "articles/blockchain/**/*.md": "https://feedback.azure.com/d365community/forum/1117d1aa-0c25-ec11-b6e6-000d3a4f07b8",
        "articles/cdn/**/*.md": "https://feedback.azure.com/d365community/forum/8ae9bf04-8326-ec11-b6e6-000d3a4f0789?c=78a5490b-8326-ec11-b6e6-000d3a4f0789",
        "articles/chef/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/cloudfoundry/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/cloud-partner-portal/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/cloud-services/**/*.md": "https://feedback.azure.com/d365community/forum/a80be93d-0d25-ec11-b6e6-000d3a4f07b8",
        "articles/cloud-shell/**/*.md": "https://feedback.azure.com/d365community/forum/4518e8d7-0925-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/Anomaly-Detector/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858?c=6c8853b4-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/Bing-Autosuggest/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/Bing-Custom-Search**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/Bing-Entities-Search/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/Bing-Image-Search/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/Bing-News-Search/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/Bing-Spell-Check/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/Bing-Video-Search/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/Bing-Web-Search/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/Computer-vision/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858?c=7a8853b4-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/Content-Moderator/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858?c=6c8853b4-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/Custom-Vision-Service/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858?c=7a8853b4-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/Face/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858?c=7a8853b4-0b25-ec11-b6e6-000d3a4f0858",
        "articles/applied-ai-services/form-recognizer/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858?c=7a8853b4-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/Immersive-Reader/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858?c=449a6fba-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/LUIS/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858",
        "articles/applied-ai-services/metrics-advisor/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858?c=6c8853b4-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/QnAMaker/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858?c=449a6fba-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/Personalizer/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858?c=6c8853b4-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/Speaker-recognition/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/speech-service/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858?c=21041fae-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/language-service/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858?c=449a6fba-0b25-ec11-b6e6-000d3a4f0858",
        "articles/cognitive-services/Translator/**/*.md": "https://feedback.azure.com/d365community/forum/09041fae-0b25-ec11-b6e6-000d3a4f0858?c=449a6fba-0b25-ec11-b6e6-000d3a4f0858",
        "articles/communication-services/**/*.md": "https://feedback.azure.com/d365community/forum/81ff6d2b-0c25-ec11-b6e6-000d3a4f0858",
        "articles/connectors/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/container-instances/**/*.md": "https://feedback.azure.com/d365community/forum/1e5d6956-0c25-ec11-b6e6-000d3a4f0858",
        "articles/container-registry/**/*.md": "https://feedback.azure.com/d365community/forum/180a533d-0d25-ec11-b6e6-000d3a4f0858",
        "articles/containers/**/*.md": "https://feedback.azure.com/d365community/forum/1e5d6956-0c25-ec11-b6e6-000d3a4f0858",
        "articles/container-service/**/*.md": "https://feedback.azure.com/d365community/forum/aabe212a-f724-ec11-b6e6-000d3a4f0da0",
        "articles/cosmos-db/**/*.md": "https://feedback.azure.com/d365community/forum/3002b3be-0d25-ec11-b6e6-000d3a4f0858",
        "articles/managed-instance-apache-cassandra/**/*.md": "https://feedback.azure.com/d365community/forum/3002b3be-0d25-ec11-b6e6-000d3a4f0858?c=e6e5c7c4-0d25-ec11-b6e6-000d3a4f0858",
        "articles/cost-management-billing/**/*.md": "https://feedback.azure.com/d365community/forum/748a4eaa-0e25-ec11-b6e6-000d3a4f07b8",
        "articles/cost-management-billing/costs/**/*.md": "https://feedback.azure.com/d365community/forum/748a4eaa-0e25-ec11-b6e6-000d3a4f07b8",
        "articles/cost-management-billing/manage/**/*.md": "https://feedback.azure.com/d365community/forum/ebeaa30a-2425-ec11-b6e6-000d3a4f0f84",
        "articles/cost-management-billing/reservations/**/*.md": "https://feedback.azure.com/d365community/forum/f54500da-fd24-ec11-b6e6-000d3a4f07b8",
        "articles/data-catalog/**/*.md": "https://feedback.azure.com/d365community/forum/3bedd14b-6b26-ec11-b6e6-000d3a4f032c",
        "articles/data-factory/**/*.md": "https://feedback.azure.com/d365community/forum/1219ec2d-6c26-ec11-b6e6-000d3a4f032c",
        "articles/data-lake-analytics/**/*.md": "https://feedback.azure.com/d365community/forum/7fd97106-7326-ec11-b6e6-000d3a4f032c",
        "articles/data-lake-store/**/*.md": "https://feedback.azure.com/d365community/forum/7fd97106-7326-ec11-b6e6-000d3a4f032c",
        "articles/data-share/**/*.md": "https://feedback.azure.com/d365community/forum/82d7bddb-fb24-ec11-b6e6-000d3a4f07b8",
        "articles/defender-for-cloud/**/*.md": "https://feedback.azure.com/d365community/forum/0f853254-0425-ec11-b6e6-000d3a4f07b8",
        "articles/dev-spaces/**/*.md": "https://github.com/Azure/dev-spaces/issues",
        "articles/devtest-lab/**/*.md": "https://feedback.azure.com/d365community/forum/502dba10-7726-ec11-b6e6-000d3a4f032c",
        "articles/digital-twins/**/*.md": "https://feedback.azure.com/d365community/forum/9d500f96-f124-ec11-b6e6-000d3a4f0da0",
        "articles/dms/**/*.md": "https://feedback.azure.com/d365community/forum/2dd7eb75-ef24-ec11-b6e6-000d3a4f0da0",
        "articles/dns/**/*.md": "https://feedback.azure.com/d365community/forum/8ae9bf04-8326-ec11-b6e6-000d3a4f0789?c=9c429912-8326-ec11-b6e6-000d3a4f0789",
        "articles/docker/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/documentdb/**/*.md": "https://feedback.azure.com/d365community/forum/3002b3be-0d25-ec11-b6e6-000d3a4f0858",
        "articles/dotnet/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/event-grid/**/*.md": "https://feedback.azure.com/d365community/forum/a095b5b5-f124-ec11-b6e6-000d3a4f0da0",
        "articles/event-hubs/**/*.md": "https://feedback.azure.com/d365community/forum/86c37ae9-7526-ec11-b6e6-000d3a4f032c",
        "articles/expressroute/**/*.md": "https://feedback.azure.com/d365community/forum/8ae9bf04-8326-ec11-b6e6-000d3a4f0789?c=a34c3e27-8326-ec11-b6e6-000d3a4f0789",
        "articles/firewall/**/*.md": "https://feedback.azure.com/d365community/forum/8ae9bf04-8326-ec11-b6e6-000d3a4f0789?c=fc894060-8326-ec11-b6e6-000d3a4f0789",
        "articles/frontdoor/**/*.md": "https://feedback.azure.com/d365community/forum/8ae9bf04-8326-ec11-b6e6-000d3a4f0789?c=d47b0f41-8326-ec11-b6e6-000d3a4f0789",
        "articles/genomics/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/germany/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/governance/**/*.md": "https://feedback.azure.com/d365community/forum/675ae472-f324-ec11-b6e6-000d3a4f0da0",
        "articles/guidance/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/guides/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/hdinsight/**/*.md": "https://feedback.azure.com/d365community/forum/14770d6d-7626-ec11-b6e6-000d3a4f032c",
        "articles/industry/agriculture/**/*.md": "https://feedback.azure.com/d365community/forum/28494f0f-f224-ec11-b6e6-000d3a4f0da0",
        "articles/iot-central/**/*.md": "https://feedback.azure.com/d365community/forum/35b59d83-f424-ec11-b6e6-000d3a4f0da0",
        "articles/iot-dps/**/*.md": "https://feedback.azure.com/d365community/forum/fcb810f7-f824-ec11-b6e6-000d3a4f0da0",
        "articles/iot-edge/**/*.md": "https://feedback.azure.com/d365community/forum/0e2fff5d-f524-ec11-b6e6-000d3a4f0da0",
        "articles/iot-fundamentals/**/*.md": "https://feedback.azure.com/d365community/forum/fcb810f7-f824-ec11-b6e6-000d3a4f0da0",
        "articles/iot-hub/**/*.md": "https://feedback.azure.com/d365community/forum/fcb810f7-f824-ec11-b6e6-000d3a4f0da0",
        "articles/iot-suite/**/*.md": "https://feedback.azure.com/d365community/forum/fcb810f7-f824-ec11-b6e6-000d3a4f0da0",
        "articles/jenkins/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/key-vault/**/*.md": "https://feedback.azure.com/d365community/forum/285c5ae0-f524-ec11-b6e6-000d3a4f0da0",
        "articles/lighthouse/**/*.md": "https://feedback.azure.com/d365community/forum/cd8dfdcb-f824-ec11-b6e6-000d3a4f0da0",
        "articles/load-balancer/**/*.md": "https://feedback.azure.com/d365community/forum/8ae9bf04-8326-ec11-b6e6-000d3a4f0789?c=e8894060-8326-ec11-b6e6-000d3a4f0789",
        "articles/load-testing/**/*.md": "https://github.com/microsoft/azure-load-testing/issues",
        "articles/log-analytics/**/*.md": "https://feedback.azure.com/d365community/forum/aa68334e-1925-ec11-b6e6-000d3a4f09d0",
        "articles/logic-apps/**/*.md": "https://feedback.azure.com/d365community/forum/cb47c115-7926-ec11-b6e6-000d3a4f032c",
        "articles/machine-learning/**/*.md": "https://feedback.azure.com/d365community/forum/b9a0c624-ad25-ec11-b6e6-000d3a4f09d0",
        "articles/machine-learning/classic/*.md": "https://feedback.azure.com/d365community/forum/b9a0c624-ad25-ec11-b6e6-000d3a4f09d0",
        "articles/machine-learning/data-science-virtual-machine/*.md": "https://feedback.azure.com/d365community/forum/fe7451c9-7426-ec11-b6e6-000d3a4f032c",
        "articles/machine-learning/studio/*.md": "https://feedback.azure.com/d365community/forum/b9a0c624-ad25-ec11-b6e6-000d3a4f09d0",
        "articles/machine-learning/team-data-science-process/*.md": "https://feedback.azure.com/d365community/forum/b9a0c624-ad25-ec11-b6e6-000d3a4f09d0",
        "articles/managed-applications/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/marketplace/**/*.md": "https://feedback.azure.com/d365community/forum/45156b35-0a25-ec11-b6e6-000d3a4f09d0",
        "articles/marketplace-consumer/**/*.md": "https://feedback.azure.com/d365community/forum/45156b35-0a25-ec11-b6e6-000d3a4f09d0",
        "articles/marketplace-publishing/**/*.md": "https://feedback.azure.com/d365community/forum/45156b35-0a25-ec11-b6e6-000d3a4f09d0",
        "articles/media-services/**/*.md": "https://feedback.azure.com/d365community/forum/a78db44a-0d25-ec11-b6e6-000d3a4f09d0",
        "articles/media-services/video-indexer/**/*.md": "https://cognitive.uservoice.com/forums/598144-video-indexer",
        "articles/media-services/video-indexer/*.md": "https://cognitive.uservoice.com/forums/598144-video-indexer",
        "articles/migrate/**/*.md": "https://feedback.azure.com/d365community/forum/cd45915f-0f25-ec11-b6e6-000d3a4f09d0",
        "articles/mobile-engagement/**/*.md": "https://feedback.azure.com/d365community/forum/442d23dd-8226-ec11-b6e6-000d3a4f0789",
        "articles/monitoring-and-diagnostics/**/*.md": "https://feedback.azure.com/d365community/forum/07d1d6e8-7426-ec11-b6e6-000d3a4f032c",
        "articles/multi-factor-authentication/**/*.md": "https://feedback.azure.com/d365community/forum/22920db1-ad25-ec11-b6e6-000d3a4f0789",
        "articles/mysql/**/*.md": "https://feedback.azure.com/d365community/forum/47b1e71d-ee24-ec11-b6e6-000d3a4f0da0",
        "articles/networking/**/*.md": "https://feedback.azure.com/d365community/forum/8ae9bf04-8326-ec11-b6e6-000d3a4f0789",
        "articles/network-watcher/**/*.md": "https://feedback.azure.com/d365community/forum/8ae9bf04-8326-ec11-b6e6-000d3a4f0789?c=cd276b66-8326-ec11-b6e6-000d3a4f0789",
        "articles/notebooks/**/*.md": "https://github.com/microsoft/AzureNotebooks/issues",
        "articles/notification-hubs/**/*.md": "https://feedback.azure.com/d365community/forum/405a1b30-8b26-ec11-b6e6-000d3a4f0789",
        "articles/openshift/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/operations-management-suite/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/postgresql/**/*.md": "https://feedback.azure.com/d365community/forum/c5e32b97-ee24-ec11-b6e6-000d3a4f0da0",
        "articles/power-bi-embedded/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/power-bi-workspace-collections/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/purview/**/*.md": "https://feedback.azure.com/d365community/forum/82d7bddb-fb24-ec11-b6e6-000d3a4f07b8",
        "articles/resiliency/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/scheduler/**/*.md": "https://feedback.azure.com/d365community/forum/7da6a58f-8b26-ec11-b6e6-000d3a4f0789",
        "articles/search/**/*.md": "https://feedback.azure.com/d365community/forum/9325d19e-0225-ec11-b6e6-000d3a4f07b8",
        "articles/security/**/*.md": "https://feedback.azure.com/d365community/forum/45d643ce-2025-ec11-b6e6-000d3a4f0f84",
        "articles/sentinel/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/service-bus/**/*.md": "https://feedback.azure.com/d365community/forum/7c0a897d-2125-ec11-b6e6-000d3a4f0f84",
        "articles/service-bus-messaging/**/*.md": "https://feedback.azure.com/d365community/forum/7c0a897d-2125-ec11-b6e6-000d3a4f0f84",
        "articles/service-fabric/**/*.md": "https://feedback.azure.com/d365community/forum/e622b37a-2225-ec11-b6e6-000d3a4f0f84",
        "articles/service-health/**/*.md": "https://feedback.azure.com/d365community/forum/f36c61ce-0625-ec11-b6e6-000d3a4f07b8",
        "articles/site-recovery/**/*.md": "https://feedback.azure.com/d365community/forum/3ccca344-2d25-ec11-b6e6-000d3a4f0f84",
        "articles/spatial-anchors/**/*.md": "https://feedback.azure.com/d365community/forum/f47d9b25-0725-ec11-b6e6-000d3a4f07b8",
        "articles/sql-database/**/*.md": "https://feedback.azure.com/d365community/forum/04fe6ee0-3b25-ec11-b6e6-000d3a4f0da0",
        "articles/sql-data-warehouse/**/*.md": "https://feedback.azure.com/d365community/forum/9b9ba8e4-0825-ec11-b6e6-000d3a4f07b8?c=53209bfe-0933-ec11-b6e6-00224827b3e3",
        "articles/sql-server-stretch-database/**/*.md": "https://feedback.azure.com/d365community/forum/04fe6ee0-3b25-ec11-b6e6-000d3a4f0da0",
        "articles/storage/**/*.md": "https://feedback.azure.com/d365community/forum/a8bb4a47-3525-ec11-b6e6-000d3a4f0f84",
        "articles/storsimple/**/*.md": "https://feedback.azure.com/d365community/forum/f2517c22-3525-ec11-b6e6-000d3a4f0f84",
        "articles/stream-analytics/**/*.md": "https://feedback.azure.com/d365community/forum/d12ec4e3-b825-ec11-b6e6-000d3a4f0f1c",
        "articles/synapse-analytics/**/*.md": "https://feedback.azure.com/d365community/forum/9b9ba8e4-0825-ec11-b6e6-000d3a4f07b8",
        "articles/terraform/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/time-series-insights/**/*.md": "https://feedback.azure.com/d365community/forum/873d6d1c-0c25-ec11-b6e6-000d3a4f07b8",
        "articles/traffic-manager/**/*.md": "https://feedback.azure.com/d365community/forum/8ae9bf04-8326-ec11-b6e6-000d3a4f0789?c=40ace5ab-8326-ec11-b6e6-000d3a4f0789",
        "articles/virtual-desktop/**/*.md": "https://techcommunity.microsoft.com/t5/azure-virtual-desktop/idb-p/AzureVirtualDesktop",
        "articles/virtual-machines/**/*.md": "https://feedback.azure.com/d365community/forum/ec2f1827-be25-ec11-b6e6-000d3a4f0f1c",
        "articles/virtual-machine-scale-sets/**/*.md": "https://feedback.azure.com/d365community/forum/ec2f1827-be25-ec11-b6e6-000d3a4f0f1c",
        "articles/virtual-network/**/*.md": "https://feedback.azure.com/d365community/forum/8ae9bf04-8326-ec11-b6e6-000d3a4f0789?c=f2c41334-8326-ec11-b6e6-000d3a4f0789",
        "articles/visual-studio/**/*.md": "https://feedback.azure.com/d365community/forum/79b1327d-d925-ec11-b6e6-000d3a4f06a4",
        "articles/vpn-gateway/**/*.md": "https://feedback.azure.com/d365community/forum/8ae9bf04-8326-ec11-b6e6-000d3a4f0789?c=9fa5490b-8326-ec11-b6e6-000d3a4f0789"
      },
      "feedback_system": {
        "articles/cognitive-services/Academic-Knowledge/**/*.md": "None",
        "articles/cognitive-services/custom-decision-service/**/*.md": "None",
        "articles/cognitive-services/Emotion/**/*.md": "None",
        "articles/cognitive-services/EntityLinking/**/*.md": "None",
        "articles/cognitive-services/KES/**/*.md": "None",
        "articles/cognitive-services/LinguisticAnalysisAPI/**/*.md": "None",
        "articles/cognitive-services/Recommendations/**/*.md": "None",
        "articles/cognitive-services/Web-Language-Model/**/*.md": "None",
        "articles/virtual-machines/linux/classic/**/*": "None",
        "articles/virtual-machines/windows/classic/**/*": "None"
      },
      "learn_banner_products": {
        "articles/**/*.md": [
          "azure"
        ],
        "articles/virtual-machines/**/*.md": [
          "azure-virtual-machines"
        ],
        "articles/azure-portal/**/*.md": [
          "azure-portal"
        ],
        "articles/azure-functions/**/*.md": [
          "azure-functions"
        ]
      },
      "manager": {
        "articles/app-service/**/*.md": "gwallace",
        "articles/app-service-mobile/**/*.md": "crdun",
        "articles/automanage/*md": "mamccrea",
        "articles/automation/**/*.md": "evansma",
        "articles/azure-arc/servers/**/*.md": "gwallace",
        "articles/azure-functions/**/*.md": "gwallace",
        "articles/azure-monitor/**/*.md": "orspodek",
        "articles/azure-portal/**/*.md": "evansma",
        "articles/azure-sql/**/*.md": "jroth",
        "articles/azure-sql-edge/**/*.md": "jroth",
        "articles/azure-vmware/**/*.md": "gwallace",
        "articles/backup/**/*.md": "evansma",
        "articles/baremetal-infrastructure/**/*.md": "gwallace",
        "articles/batch/**/*.md": "mamccrea",
        "articles/cognitive-services/**/*.md": "nitinme",
        "articles/defender-for-cloud/*.md": "raynew",
        "articles/defender-for-iot/organizations/*.md": "raynew",
        "articles/defender-for-iot/device-builders/*.md": "raynew",
        "articles/devtest-labs/**/*.md": "j-martens",
        "articles/lab-services/**/*.md": "j-martens",
        "articles/migrate/**/*.md": "evansma",
        "articles/remote-rendering/**/*.md": "jlyons",
        "articles/site-recovery/**/*.md": "evansma",
        "articles/virtual-machines/**/*.md": "mamccrea",
        "articles/virtual-machine-scale-sets/**/*.md": "mamccrea"
      },
      "ms.author": {
        "articles/advisor/*.md": "sagupt",
        "articles/aks/**/*.md": "zarhoads",
        "articles/ansible/**/*.md": "tarcher",
        "articles/app-service/*.md": "cephalin",
        "articles/app-service/containers/*.md": "cephalin",
        "articles/app-service/environment/*.md": "madsd",
        "articles/app-service/scripts/*.md": "cephalin",
        "articles/app-service-mobile/**/*.md": "emalani",
        "articles/automanage/*md": "daberry",
        "articles/automation/**/*.md": "v-ssudhir",
        "articles/azure-arc/**/*.md": "jenhayes",
        "articles/azure-arc/servers/**/*.md": "jenhayes",
        "articles/azure-functions/**/*.md": "glenga",
        "articles/azure-fluid-relay/**/*.md": "hickeys",
        "articles/azure-government/**/*.md": "stevevi",
        "articles/azure-monitor/app/*.md": "lagayhar",
        "articles/azure-monitor/containers/**/*.md": "bwren",
        "articles/azure-monitor/insights/container-insights*.md": "bwren",
        "articles/azure-monitor/log-query/*.md": "robb",
        "articles/azure-monitor/platform/*.md": "robb",
        "articles/azure-monitor/agents/*.md": "bwren",
        "articles/azure-monitor/alerts/*.md": "robb",
        "articles/azure-monitor/autoscale/*.md": "robb",
        "articles/azure-monitor/containers/*.md": "bwren",
        "articles/azure-monitor/essentials/*.md": "robb",
        "articles/azure-monitor/*.md": "bwren",
        "articles/azure-monitor/insights/*.md": "bwren",
        "articles/azure-monitor/logs/*.md": "robb",
        "articles/azure-monitor/visualize/**/*.md": "lagayhar",
        "articles/azure-monitor/vm/*.md": "bwren",
        "articles/azure-percept/*.md": "ngt",
        "articles/azure-percept/*.yml": "ngt",
        "articles/azure-portal/**/*.md": "jenhayes",
        "articles/azure-portal/**/*.yml": "jenhayes",
        "articles/azure-relay/*.md": "spelluru",
        "articles/azure-resource-manager/*.md": "tomfitz",
        "articles/azure-resource-manager/custom-providers/**/*.md": "tomfitz",
        "articles/azure-resource-manager/managed-applications/**/*.md": "tomfitz",
        "articles/azure-resource-manager/management/**/*.md": "tomfitz",
        "articles/azure-resource-manager/templates/**/*.md": "jgao",
        "articles/azure-resource-manager/bicep/**/*.md": "jgao",
        "articles/azure-resource-manager/troubleshooting/**/*.md": "jgao",
        "articles/partner-solutions/**/*.md": "tomfitz",
        "articles/azure-vmware/**/*.md": "v-szuber",
        "articles/backup/**/*.md": "v-amallick",
        "articles/backup/**/*.yml": "v-amallick",
        "articles/baremetal-infrastructure/**/*.md": "dineshga",
        "articles/batch/**/*.md": "prkannap",
        "articles/blockchain/**/*.md": "patricka",
        "articles/chef/**/*.md": "tarcher",
        "articles/applied-ai-services/**/*.md": "mbullwin",
        "articles/cognitive-services/**/*.md": "pafarley",
        "articles/cognitive-services/Anomaly-Detector/**/*.md": "mbullwin",
        "articles/cognitive-services/Bing-Autosuggest/**/*.md": "aahi",
        "articles/cognitive-services/Bing-Custom-Search/**/*.md": "aahi",
        "articles/cognitive-services/Bing-Entities-Search/**/*.md": "aahi",
        "articles/cognitive-services/Bing-Image-Search/**/*.md": "aahi",
        "articles/cognitive-services/bing-local-business-search/**/*.md": "aahi",
        "articles/cognitive-services/Bing-News-Search/**/*.md": "aahi",
        "articles/cognitive-services/Bing-Spell-Check/**/*.md": "aahi",
        "articles/cognitive-services/Bing-Video-Search/**/*.md": "aahi",
        "articles/cognitive-services/bing-visual-search/**/*.md": "aahi",
        "articles/cognitive-services/Bing-Web-Search/**/*.md": "aahi",
        "articles/cognitive-services/Computer-vision/**/*.md": "pafarley",
        "articles/cognitive-services/Content-Moderator/**/*.md": "pafarley",
        "articles/cognitive-services/Custom-Vision-Service/**/*.md": "pafarley",
        "articles/cognitive-services/Face/**/*.md": "pafarley",
        "articles/applied-ai-services/form-recognizer/**/*.md": "lajanuar",
        "articles/cognitive-services/LUIS/**/*.md": "aahi",
        "articles/applied-ai-services/metrics-advisor/**/*.md": "mbullwin",
        "articles/cognitive-services/personalizer/**/*.md": "edjez",
        "articles/cognitive-services/QnAMaker/**/*.md": "mbullwin",
        "articles/cognitive-services/Speech-Service/**/*.md": "eur",
        "articles/cognitive-services/language-service/**/*.md": "aahi",
        "articles/cognitive-services/Translator/**/*.md": "lajanuar",
        "articles/connectors/*.md": "estfan",
        "articles/container-instances/**/*.md": "macolso",
        "articles/container-registry/**/*.md": "danlep",
        "articles/data-lake-analytics/*.md": "xujiang1",
        "articles/defender-for-cloud/*.md": "v-ekrieg",
        "articles/defender-for-iot/organizations/*.md": "shhazam",
        "articles/defender-for-iot/device-builders/*.md": "shhazam",
        "articles/dev-spaces/**/*.md": "zarhoads",
        "articles/devtest-labs/**/*.md": "juliako",
        "articles/event-grid/**/*.md": "spelluru",
        "articles/event-hubs/*.md": "spelluru",
        "articles/governance/*.md": "gwallace",
        "articles/governance/blueprints/**/*.md": "gwallace",
        "articles/governance/management-groups/**/*.md": "rithorn",
        "articles/governance/policy/**/*.md": "gwallace",
        "articles/governance/resource-graph/**/*.md": "gwallace",
        "articles/hdinsight/*.md": "jasonh",
        "articles/hdinsight/kafka/*.md": "argangu",
        "articles/hdinsight/**/*.md": "jasonh",
        "articles/jenkins/**/*.md": "tarcher",
        "articles/lab-services/**/*.md": "nicktrog",
        "articles/lighthouse/**/*.md": "jenhayes",
        "articles/logic-apps/*.md": "estfan",
        "articles/machine-learning/*.md": "cgronlun",
        "articles/machine-learning/classic/*.md": "cgronlun",
        "articles/marketplace/**/*.md": "mingshen",
        "articles/media-services/**/*.md": "juliako",
        "articles/media-services/*.md": "juliako",
        "articles/migrate/*.md": "v-ssudhir",
        "articles/notebooks/*.md": "joshuapa",
        "articles/search/*.md": "heidist",
        "articles/service-bus-messaging/*.md": "spelluru",
        "articles/service-fabric/*.md": "sukanyas",
        "articles/service-health/*.md": "robb",
        "articles/site-recovery/*.md": "v-ssenthilna",
        "articles/stream-analytics/*.md": "jasonh",
        "articles/terraform/**/*.md": "tarcher",
        "articles/virtual-machines/*.md": "cynthn",
        "articles/virtual-machines/linux/*.md": "cynthn",
        "articles/virtual-machines/windows/*.md": "cynthn",
        "articles/virtual-machines-scale-sets/*.md": "jushiman",
        "articles/azure-video-analyzer/video-analyzer-docs/*.md": "juliako",
        "articles/azure-video-analyzer/video-analyzer-docs/edge/*.md": "juliako",
        "articles/azure-video-analyzer/video-analyzer-docs/cloud/*.md": "juliako",
        "articles/azure-video-analyzer/video-analyzer-for-media-docs/*.md": "Juliako"
      },
      "ms.collection": {
        "articles/application-gateway/*.md": "networking",
        "articles/application-gateway/*.yml": "networking",
        "articles/cdn/*.md": "networking",
        "articles/cdn/*.yml": "networking",
        "articles/bastion/*.md": "networking",
        "articles/bastion/*.yml": "networking",
        "articles/ddos-protection/*.md": "networking",
        "articles/ddos-protection/*.yml": "networking",
        "articles/dns/*.md": "networking",
        "articles/dns/*.yml": "networking",
        "articles/expressroute/*.md": "networking",
        "articles/expressroute/*.yml": "networking",
        "articles/firewall/*.md": "networking",
        "articles/firewall/*.yml": "networking",
        "articles/firewall-manager/*.md": "networking",
        "articles/firewall-manager/*.yml": "networking",
        "articles/frontdoor/*.md": "networking",
        "articles/frontdoor/*.yml": "networking",
        "articles/internet-peering/*.md": "networking",
        "articles/internet-peering/*.yml": "networking",
        "articles/internet-analyzer/*.md": "networking",
        "articles/internet-analyzer/*.yml": "networking",
        "articles/load-balancer/*.md": "networking",
        "articles/load-balancer/*.yml": "networking",
        "articles/networking/*.md": "networking",
        "articles/networking/*.yml": "networking",
        "articles/network-watcher/*.md": "networking",
        "articles/network-watcher/*.yml": "networking",
        "articles/peering-service/*.md": "networking",
        "articles/peering-service/*.yml": "networking",
        "articles/private-link/*.md": "networking",
        "articles/private-link/*.yml": "networking",
        "articles/traffic-manager/*.md": "networking",
        "articles/traffic-manager/*.yml": "networking",
        "articles/virtual-network/*.md": "networking",
        "articles/virtual-network/*.yml": "networking",
        "articles/virtual-wan/*.md": "networking",
        "articles/virtual-wan/*.yml": "networking",
        "articles/vpn-gateway/*.md": "networking",
        "articles/vpn-gateway/*.yml": "networking",
        "articles/web-application-firewall/*.md": "networking",
        "articles/web-application-firewall/*.yml": "networking"
      },
      "ms.service": {
        "articles/advisor/**/*.md": "advisor",
        "articles/aks/**/*.md": "container-service",
        "articles/ansible/**/*.md": "ansible",
        "articles/app-service/**/*.md": "app-service",
        "articles/app-service-mobile/**/*.md": "app-service-mobile",
        "articles/automation/**/*.md": "automation",
        "articles/azure-arc/**/*.md": "azure-arc",
        "articles/azure-functions/**/*.md": "azure-functions",
        "articles/azure-fluid-relay/**/*.md": "azure-fluid",
        "articles/azure-government/**/*.md": "azure-government",
        "articles/azure-monitor/**/*.md": "azure-monitor",
        "articles/azure-portal/**/*.md": "azure-portal",
        "articles/azure-portal/supportability/**/*.md": "azure-supportability",
        "articles/azure-relay/*.md": "service-bus-relay",
        "articles/azure-resource-manager/**/*.md": "azure-resource-manager",
        "articles/azure-resource-manager/custom-providers/**/*.md": "azure-custom-providers",
        "articles/azure-resource-manager/managed-applications/**/*.md": "managed-applications",
        "articles/partner-solutions/**/*.md": "partner-services",
        "articles/azure-vmware/**/*.md": "azure-vmware",
        "articles/backup/**/*.md": "backup",
        "articles/baremetal-infrastructure/**/*.md": "baremetal-infrastructure",
        "articles/batch/**/*.md": "batch",
        "articles/blockchain/**/*.md": "azure-blockchain",
        "articles/chef/**/*.md": "chef",
        "articles/cognitive-services/**/*.md": "cognitive-services",
        "articles/connectors/*.md": "logic-apps",
        "articles/container-instances/**/*.md": "container-instances",
        "articles/container-registry/**/*.md": "container-registry",
        "articles/dev-spaces/**/*.md": "azure-dev-spaces",
        "articles/devtest-labs/**/*.md": "devtest-lab",
        "articles/defender-for-cloud/*.md": "defender-for-cloud",
        "articles/defender-for-iot/organizations/*.md": "defender-for-iot",
        "articles/defender-for-iot/device-builders/*.md": "defender-for-iot",
        "articles/event-grid/**/*.md": "event-grid",
        "articles/event-hubs/*.md": "event-hubs",
        "articles/governance/*.md": "governance",
        "articles/governance/blueprints/**/*.md": "blueprints",
        "articles/governance/management-groups/**/*.md": "governance",
        "articles/governance/policy/**/*.md": "azure-policy",
        "articles/governance/resource-graph/**/*.md": "resource-graph",
        "articles/industry/**/*.md": "azure-industry",
        "articles/jenkins/**/*.md": "jenkins",
        "articles/lab-services/**/*.md": "lab-services",
        "articles/lighthouse/**/*.md": "lighthouse",
        "articles/logic-apps/*.md": "logic-apps",
        "articles/marketplace/**/*.md": "marketplace",
        "articles/media-services/**/*.md": "media-services",
        "articles/media-services/*.md": "media-services",
        "articles/migrate/*.md": "azure-migrate",
        "articles/notebooks/*.md": "azure-notebooks",
        "acticles/object-anchors/**/*.md": "azure-object-anchors",
        "articles/remote-rendering/**/*.md": "azure-remote-rendering",
        "articles/sentinel/**/*.md": "microsoft-sentinel",
        "articles/service-bus-messaging/*.md": "service-bus-messaging",
        "articles/service-fabric/*.md": "service-fabric",
        "articles/service-health/**/*.md": "service-health",
        "articles/site-recovery/*.md": "site-recovery",
        "articles/terraform/**/*.md": "terraform",
        "articles/virtual-desktop/**/*.md": "virtual-desktop",
        "articles/virtual-machines/*.md": "virtual-machines",
        "articles/virtual-machine-scale-sets/*.md": "virtual-machine-scale-sets",
        "articles/azure-video-analyzer/video-analyzer-docs/*.md": "azure-video-analyzer",
        "articles/azure-video-analyzer/video-analyzer-docs/edge/*.md": "azure-video-analyzer",
        "articles/azure-video-analyzer/video-analyzer-docs/cloud/*.md": "azure-video-analyzer",
        "articles/azure-video-analyzer/video-analyzer-for-media-docs/*.md": "azure-video-analyzer"
      },
      "ms.subservice": {
        "articles/azure-arc/kubernetes/**/*.md": "azure-arc-kubernetes",
        "articles/azure-arc/servers/**/*.md": "azure-arc-servers",
        "articles/azure-monitor/app/**/*.md": "application-insights",
        "articles/azure-monitor/agents/**/*.md": "agents",
        "articles/azure-monitor/alerts/**/*.md": "alerts",
        "articles/azure-monitor/autoscale/**/*.md": "autoscale",
        "articles/azure-monitor/containers/**/*.md": "containers",
        "articles/azure-monitor/essentials/**/*.md": "essentials",
        "articles/azure-monitor/*.md": "general",
        "articles/azure-monitor/insights/**/*.md": "insights",
        "articles/azure-monitor/logs/**/*.md": "logs",
        "articles/azure-monitor/visualize/**/*.md": "visualizations",
        "articles/azure-monitor/vm/**/*.md": "virtual-machines",
        "articles/azure-resource-manager/management/**/*.md": "management",
        "articles/azure-resource-manager/templates/**/*.md": "templates",
        "articles/azure-resource-manager/bicep/**/*.md": "bicep",
        "articles/azure-resource-manager/troubleshooting/**/*.md": "troubleshooting",
        "articles/partner-solutions/apache-kafka-confluent-cloud/**/*.md": "confluent",
        "articles/partner-solutions/datadog/**/*.md": "datadog",
        "articles/partner-solutions/elastic/**/*.md": "elastic",
        "articles/partner-solutions/logzio/**/*.md": "logzio",
        "articles/cognitive-services/Anomaly-Detector/**/*.md": "anomaly-detector",
        "articles/cognitive-services/Bing-Autosuggest/**/*.md": "bing-autosuggest",
        "articles/cognitive-services/Bing-Custom-Search/**/*.md": "bing-custom-search",
        "articles/cognitive-services/Bing-Entities-Search/**/*.md": "bing-entity-search",
        "articles/cognitive-services/Bing-Image-Search/**/*.md": "bing-image-search",
        "articles/cognitive-services/bing-local-business-search/**/*.md": "bing-local-business",
        "articles/cognitive-services/Bing-News-Search/**/*.md": "bing-news-search",
        "articles/cognitive-services/Bing-Spell-Check/**/*.md": "bing-spell-check",
        "articles/cognitive-services/Bing-Video-Search/**/*.md": "bing-video-search",
        "articles/cognitive-services/bing-visual-search/**/*.md": "bing-visual-search",
        "articles/cognitive-services/Bing-Web-Search/**/*.md": "bing-web-search",
        "articles/cognitive-services/Computer-vision/**/*.md": "computer-vision",
        "articles/cognitive-services/Content-Moderator/**/*.md": "content-moderator",
        "articles/cognitive-services/Custom-Vision-Service/**/*.md": "custom-vision",
        "articles/cognitive-services/Face/**/*.md": "face-api",
        "articles/applied-ai-services/form-recognizer/**/*.md": "forms-recognizer",
        "articles/cognitive-services/immersive-reader/**/*.md": "immersive-reader",
        "articles/cognitive-services/Ink-Recognizer/**/*.md": "ink-recognizer",
        "articles/cognitive-services/LUIS/**/*.md": "language-understanding",
        "articles/applied-ai-services/metrics-advisor/**/*.md": "metrics-advisor",
        "articles/cognitive-services/personalizer/**/*.md": "personalizer",
        "articles/cognitive-services/QnAMaker/**/*.md": "qna-maker",
        "articles/cognitive-services/Speech-Service/**/*.md": "speech-service",
        "articles/cognitive-services/language-service/**/*.md": "language-service",
        "articles/cognitive-services/Translator/**/*.md": "translator-text",
        "articles/industry/agriculture/**/*.md": "agriculture",
        "articles/media-services/azure-media-player/*.md": "media-player",
        "articles/media-services/latest/*.md": "rest-v3",
        "articles/media-services/live-video-analytics-edge/*.md": "lva-edge",
        "articles/media-services/previous/*.md": "rest-v2",
        "articles/media-services/video-indexer/*.md": "video-indexer",
        "articles/azure-video-analyzer/video-analyzer-for-media-docs/*.md": "azure-video-analyzer-media",
        "articles/azure-video-analyzer/video-analyzer-docs/*.md": "video-analyzer-subservice",
        "articles/azure-video-analyzer/video-analyzer-docs/edge/*.md": "video-analyzer-subservice",
        "articles/azure-video-analyzer/video-analyzer-docs/cloud/*.md": "video-analyzer-subservice",
        "articles/cosmos-db/mongodb/*.md": "cosmosdb-mongo",
        "articles/cosmos-db/cassandra/*.md": "cosmosdb-cassandra",
        "articles/cosmos-db/graph/*.md": "cosmosdb-graph",
        "articles/cosmos-db/table/*.md": "cosmosdb-table",
        "articles/cosmos-db/sql/*.md": "cosmosdb-sql",
        "articles/sentinel/**/*.md": "microsoft-sentinel"
      },
      "monikerRange": {
        "articles/iot-edge/**/*.md": ">=iotedge-2018-06"
      },
      "recommendations": {
        "articles/cognitive-services/Translator/**/*.md": false,
        "articles/azure-video-analyzer/video-analyzer-docs/*.md": false
      },
      "no-loc": {
        "articles/governance/policy/**/*.md": "[audit, deny, modify, disabled, auditifnotexists, deployifnotexists]",
        "includes/policy/**/*.md": "[audit, deny, modify, disabled, auditifnotexists, deployifnotexists]"
      },
      "searchScope": {
        "articles/advisor/**/*.md": [
          "Azure",
          "Azure Advisor"
        ],
        "articles/advisor/**/*.yml": [
          "Azure",
          "Azure Advisor"
        ],
        "articles/app-service/**/*.md": [
          "Azure",
          "App Service"
        ],
        "articles/azure-app-configuration/**/*.md": [
          "Azure",
          "AppConfig"
        ],
        "articles/azure-app-configuration/**/*.yml": [
          "Azure",
          "AppConfig"
        ],
        "articles/azure-cache-for-redis/**/*.md": [
          "Azure",
          "Cache for Redis"
        ],
        "articles/azure-cache-for-redis/**/*.yml": [
          "Azure",
          "Cache for Redis"
        ],
        "articles/azure-databricks/**/*.md": [
          "Azure",
          "Azure Databricks"
        ],
        "articles/azure-databricks/**/*.yml": [
          "Azure",
          "Azure Databricks"
        ],
        "articles/azure-monitor/**/*.md": [
          "Azure",
          "Azure Monitor"
        ],
        "articles/azure-monitor/**/*.yml": [
          "Azure",
          "Azure Monitor"
        ],
        "articles/azure-portal/**/*.md": [
          "Azure",
          "Azure portal"
        ],
        "articles/azure-portal/**/*.yml": [
          "Azure",
          "Azure portal"
        ],
        "articles/azure-portal/supportability/**/*.md": [
          "Azure",
          "Azure supportability"
        ],
        "articles/azure-portal/supportability/**/*.yml": [
          "Azure",
          "Azure supportability"
        ],
        "articles/azure-relay/**/*.md": [
          "Azure",
          "Azure Relay"
        ],
        "articles/azure-relay/**/*.yml": [
          "Azure",
          "Azure Relay"
        ],
        "articles/backup/**/*.md": [
          "Azure",
          "Azure Backup"
        ],
        "articles/backup/**/*.yml": [
          "Azure",
          "Azure Backup"
        ],
        "articles/cosmos-db/**/*.md": [
          "Azure",
          "Azure Cosmos DB"
        ],
        "articles/cosmos-db/**/*.yml": [
          "Azure",
          "Azure Cosmos DB"
        ],
        "articles/cost-management-billing/**/*.md": [
          "Azure",
          "Cost Management Billing"
        ],
        "articles/cost-management-billing/**/*.yml": [
          "Azure",
          "Cost Management Billing"
        ],
        "articles/data-catalog/**/*.md": [
          "Azure",
          "Azure Data Catalog"
        ],
        "articles/data-catalog/**/*.yml": [
          "Azure",
          "Azure Data Catalog"
        ],
        "articles/data-factory/**/*.md": [
          "Azure",
          "Azure Data Factory"
        ],
        "articles/data-factory/**/*.yml": [
          "Azure",
          "Azure Data Factory"
        ],
        "articles/data-lake-analytics/**/*.md": [
          "Azure",
          "Azure Data Lake Analytics"
        ],
        "articles/data-lake-analytics/**/*.yml": [
          "Azure",
          "Azure Data Lake Analytics"
        ],
        "articles/data-share/**/*.md": [
          "Azure",
          "Azure Data Share"
        ],
        "articles/data-share/**/*.yml": [
          "Azure",
          "Azure Data Share"
        ],
        "articles/defender-for-iot/*.md": [
          "Azure",
          "Defender for IoT"
        ],
        "articles/defender-for-iot/**/*.yml": [
          "Azure",
          "Defender for IoT"
        ],
        "articles/defender-for-iot/organizations/*.md": [
          "Azure",
          "Defender for IoT"
        ],
        "articles/defender-for-iot/organizations/**/*.yml": [
          "Azure",
          "Defender for IoT"
        ],
        "articles/defender-for-iot/device-builders/*.md": [
          "Azure",
          "Defender for IoT"
        ],
        "articles/defender-for-iot/device-builders/**/*.yml": [
          "Azure",
          "Defender for IoT"
        ],
        "articles/digital-twins/**/*.md": [
          "Azure",
          "IoT",
          "Azure Digital Twins"
        ],
        "articles/digital-twins/**/*.yml": [
          "Azure",
          "IoT",
          "Azure Digital Twins"
        ],
        "articles/event-grid/**/*.md": [
          "Azure",
          "Azure Event Grid"
        ],
        "articles/event-grid/**/*.yml": [
          "Azure",
          "Azure Event Grid"
        ],
        "articles/event-hubs/**/*.md": [
          "Azure",
          "Azure Event Hubs"
        ],
        "articles/event-hubs/**/*.yml": [
          "Azure",
          "Azure Event Hubs"
        ],
        "articles/hdinsight/**/*.md": [
          "Azure",
          "Azure HDInsight"
        ],
        "articles/hdinsight/**/*.yml": [
          "Azure",
          "Azure HDInsight"
        ],
        "articles/iot-central/**/*.md": [
          "Azure",
          "IoT",
          "Azure IoT Central"
        ],
        "articles/iot-central/**/*.yml": [
          "Azure",
          "IoT",
          "Azure IoT Central"
        ],
        "articles/iot-dps/**/*.md": [
          "Azure",
          "Azure IoT Hub",
          "IoT",
          "Azure IoT DPS"
        ],
        "articles/iot-dps/**/*.yml": [
          "Azure",
          "Azure IoT Hub",
          "IoT",
          "Azure IoT DPS"
        ],
        "articles/iot-edge/**/*.md": [
          "Azure",
          "IoT",
          "Azure IoT Edge"
        ],
        "articles/iot-edge/**/*.yml": [
          "Azure",
          "IoT",
          "Azure IoT Edge"
        ],
        "articles/iot-fundamentals/**/*.md": [
          "Azure",
          "IoT"
        ],
        "articles/iot-fundamentals/**/*.yml": [
          "Azure",
          "IoT"
        ],
        "articles/iot-hub/**/*.md": [
          "Azure",
          "IoT",
          "Azure IoT Hub"
        ],
        "articles/iot-hub/**/*.yml": [
          "Azure",
          "IoT",
          "Azure IoT Hub"
        ],
        "articles/iot-develop/**/*.md": [
          "Azure",
          "IoT",
          "IoT Plug and Play",
          "IoT device devloper"
        ],
        "articles/iot-develop/**/*.yml": [
          "Azure",
          "IoT",
          "IoT Plug and Play",
          "IoT device devloper"
        ],
        "articles/managed-instance-apache-cassandra/**/*.md": [
          "Azure",
          "Azure Managed instance for Apache Cassandra"
        ],
        "articles/managed-instance-apache-cassandra/**/*.yml": [
          "Azure",
          "Azure Managed instance for Apache Cassandra"
        ],
        "articles/mariadb/**/*.md": [
          "Azure",
          "Azure Database for MariaDB"
        ],
        "articles/mariadb/**/*.yml": [
          "Azure",
          "Azure Database for MariaDB"
        ],
        "articles/marketplace/**/*.md": [
          "Azure",
          "Partner Center",
          "Microsoft commercial marketplace"
        ],
        "articles/marketplace/**/*.yml": [
          "Azure",
          "Partner Center",
          "Microsoft commercial marketplace"
        ],
        "articles/mysql/**/*.md": [
          "Azure",
          "Azure Database for MySQL"
        ],
        "articles/mysql/**/*.yml": [
          "Azure",
          "Azure Database for MySQL"
        ],
        "articles/notebooks/**/*.md": [
          "Azure",
          "Azure Notebooks"
        ],
        "articles/notebooks/**/*.yml": [
          "Azure",
          "Azure Notebooks"
        ],
        "articles/postgresql/**.md": [
          "Azure",
          "Azure Database for PostgreSQL"
        ],
        "articles/postgresql/**.yml": [
          "Azure",
          "Azure Database for PostgreSQL"
        ],
        "articles/purview/**/*.md": [
          "Azure",
          "Azure Purview"
        ],
        "articles/purview/**/*.yml": [
          "Azure",
          "Azure Purview"
        ],
        "articles/service-bus-messaging/**/*.md": [
          "Azure",
          "Azure Service Bus Messaging"
        ],
        "articles/service-bus-messaging/**/*.yml": [
          "Azure",
          "Azure Service Bus Messaging"
        ],
        "articles/service-health/**/*.md": [
          "Azure",
          "Service Health"
        ],
        "articles/service-health/**/*.yml": [
          "Azure",
          "Service Health"
        ],
        "articles/stream-analytics/**/*.md": [
          "Azure",
          "Stream Analytics"
        ],
        "articles/stream-analytics/**/*.yml": [
          "Azure",
          "Stream Analytics"
        ],
        "articles/synapse-analytics/**/*.md": [
          "Synapse Analytics",
          "Azure"
        ],
        "articles/synapse-analytics/**/*.yml": [
          "Synapse Analytics",
          "Azure"
        ],
        "articles/time-series-insights/**/*.md": [
          "Azure",
          "Time Series Insights"
        ],
        "articles/time-series-insights/**/*.yml": [
          "Azure",
          "Time Series Insights"
        ],
        "articles/virtual-machines/**/*.md": [
          "Azure",
          "Virtual Machines"
        ],
        "articles/virtual-machines/**/*.yml": [
          "Azure",
          "Virtual Machines"
        ],
        "articles/virtual-machines/linux/**/*.md": [
          "Azure",
          "Linux Virtual Machines"
        ],
        "articles/virtual-machines/linux/**/*.yml": [
          "Azure",
          "Linux Virtual Machines"
        ],
        "articles/virtual-machines/windows/**/*.md": [
          "Azure",
          "Windows Virtual Machines"
        ],
        "articles/virtual-machines/windows/**/*.yml": [
          "Azure",
          "Windows Virtual Machines"
        ],
        "articles/virtual-machine-scale-sets/**/*.md": [
          "Azure",
          "Virtual Machine Scale Sets"
        ],
        "articles/virtual-machine-scale-sets/**/*.yml": [
          "Azure",
          "Virtual Machine Scale Sets"
        ]
      },
      "titleSuffix": {
        "articles/cognitive-services/LUIS/*.md": "Azure",
        "articles/cognitive-services/LUIS/*.yml": "Azure",
        "articles/advisor/**/*.md": "Azure Advisor",
        "articles/advisor/*.yml": "Azure Advisor",
        "articles/aks/**/*.md": "Azure Kubernetes Service",
        "articles/ansible/**/*.yml": "Ansible",
        "articles/app-service/*.md": "Azure App Service",
        "articles/app-service/*.yml": "Azure App Service",
        "articles/app-service/environment/*.md": "Azure App Service Environment",
        "articles/app-service/environment/*.yml": "Azure App Service Environment",
        "articles/app-service/scripts/*.md": "Azure App Service",
        "articles/app-service/scripts/*.yml": "Azure App Service",
        "articles/app-service-mobile/**/*.md": "Azure Mobile Apps",
        "articles/app-service-mobile/**/*.yml": "Azure Mobile Apps",
        "articles/asc-for-iot/**/*.md": "Azure Security Center for IoT",
        "articles/asc-for-iot/**/*.yml": "Azure Security Center for IoT",
        "articles/azure-fluid-relay/**/*.md": "Azure Fluid Relay",
        "articles/azure-fluid-relay/**/*.yml": "Azure Fluid Relay",
        "articles/azure-arc/**/*.md": "Azure Arc",
        "articles/azure-government/**/*.md": "Azure Government",
        "articles/azure-monitor/**/*.md": "Azure Monitor",
        "articles/azure-monitor/**/*.yml": "Azure Monitor",
        "articles/azure-portal/**/*.md": "Azure portal",
        "articles/azure-portal/**/*.yml": "Azure portal",
        "articles/azure-portal/supportability/**/*.md": "Azure supportability",
        "articles/azure-portal/supportability/**/*.yml": "Azure supportability",
        "articles/azure-relay/*.md": "Azure Relay",
        "articles/azure-resource-manager/**/*.md": "Azure Resource Manager",
        "articles/azure-resource-manager/custom-providers/**/*.md": "Azure Custom Providers",
        "articles/azure-resource-manager/managed-applications/**/*.md": "Azure Managed Applications",
        "articles/azure-sql/**/*.md": "Azure SQL",
        "articles/azure-sql/**/*.yml": "Azure SQL",
        "articles/azure-sql/database/**/*.md": "Azure SQL Database",
        "articles/azure-sql/database/**/*.yml": "Azure SQL Database",
        "articles/azure-sql/managed-instance/**/*.md": "Azure SQL Managed Instance",
        "articles/azure-sql/managed-instance/**/*.yml": "Azure SQL Managed Instance",
        "articles/azure-sql/virtual-machines/**/*.md": "SQL Server on Azure VMs",
        "articles/azure-sql/virtual-machines/**/*.yml": "SQL Server on Azure VMs",
        "articles/azure-vmware/**/*.md": "Azure VMware Solution",
        "articles/azure-vmware/**/*.yml": "Azure VMware Solution",
        "articles/backup/**/*.md": "Azure Backup",
        "articles/backup/**/*.yml": "Azure Backup",
        "articles/baremetal-infrastructure/**/*.md": "Azure Baremetal Infrastructure",
        "articles/baremetal-infrastructure/**/*.yml": "Azure Baremetal Infrastructure",
        "articles/batch/**/*.md": "Azure Batch",
        "articles/batch/**/*.yml": "Azure Batch",
        "articles/blockchain/**/*.md": "Azure Blockchain",
        "articles/chef/**/*.yml": "Chef",
        "articles/cognitive-services/**/*.md": "Azure Cognitive Services",
        "articles/connectors/*.md": "Azure Logic Apps",
        "articles/container-instances/**/*.md": "Azure Container Instances",
        "articles/container-registry/**/*.md": "Azure Container Registry",
        "articles/data-factory/**/*.md": "Azure Data Factory",
        "articles/data-factory/**/*.yml": "Azure Data Factory",
        "articles/defender-for-iot/*.md": "Azure Defender for IoT",
        "articles/defender-for-iot/organizations/*.md": "Azure Defender for IoT",
        "articles/defender-for-iot/device-builders/*.md": "Azure Defender for IoT",
        "articles/dev-spaces/**/*.md": "Azure Dev Spaces",
        "articles/devtest-labs/**/*.md": "Azure DevTest Labs",
        "articles/event-grid/**/*.md": "Azure Event Grid",
        "articles/event-hubs/*.md": "Azure Event Hubs",
        "articles/governance/blueprints/**/*.md": "Azure Blueprints",
        "articles/governance/management-groups/**/*.md": "Azure governance",
        "articles/governance/policy/**/*.md": "Azure Policy",
        "articles/governance/resource-graph/**/*.md": "Azure Resource Graph",
        "articles/industry/agriculture/**/*.md": "Azure for Industry: Agriculture",
        "articles/jenkins/**/*.yml": "Jenkins",
        "articles/lab-services/**/*.md": "Azure Lab Services",
        "articles/lighthouse/**/*.md": "Azure Lighthouse",
        "articles/logic-apps/*.md": "Azure Logic Apps",
        "articles/machine-learning/*.md": "Azure Machine Learning",
        "articles/media-services/*.md": "Azure Media Services",
        "articles/media-services/*.yml": "Azure Media Services",
        "articles/media-services/azure-media-player/*.md": "Azure Media Player",
        "articles/media-services/latest/*.md": "Azure Media Services v3",
        "articles/media-services/live-video-analytics-edge/*.md": "Live Video Analytics on IoT Edge",
        "articles/media-services/video-indexer/*.md": "Azure Media Services Video Indexer",
        "articles/migrate/**/*.md": "Azure Migrate",
        "articles/object-anchors/**/*.md": "Azure Object Anchors",
        "articles/object-anchors/**/*.yml": "Azure Object Anchors",
        "articles/purview/**/*.md": "Azure Purview",
        "articles/purview/**/*.yml": "Azure Purview",
        "articles/remote-rendering/**/*.md": "Azure Remote Rendering",
        "articles/remote-rendering/**/*.yml": "Azure Remote Rendering",
        "articles/scheduler/*.md": "Azure Scheduler",
        "articles/service-bus-messaging/*.md": "Azure Service Bus",
        "articles/service-fabric/*.md": "Azure Service Fabric",
        "articles/service-health/**/*.md": "Azure Service Health",
        "articles/service-health/*.yml": "Azure Service Health",
        "articles/site-recovery/**/*.md": "Azure Site Recovery",
        "articles/spatial-anchors/**/*.md": "Azure Spatial Anchors",
        "articles/spatial-anchors/**/*.yml": "Azure Spatial Anchors",
        "articles/sql-database/**/*.md": "Azure SQL Database",
        "articles/sql-database/**/*.yml": "Azure SQL Database",
        "articles/synapse-analytics/**/*.md": "Azure Synapse Analytics",
        "articles/synapse-analytics/**/*.yml": "Azure Synapse Analytics",
        "articles/terraform/**/*.yml": "Terraform",
        "articles/virtual-machines/**/*.md": "Azure Virtual Machines",
        "articles/virtual-machines/**/*.yml": "Azure Virtual Machines",
        "articles/virtual-machines/windows/sql/**/*.md": "SQL Server on Azure VM",
        "articles/virtual-machines/windows/sql/**/*.yml": "SQL Server on Azure VM",
        "articles/virtual-machines/workloads/**/*.md": "Azure Virtual Machines",
        "articles/virtual-machines/workloads/**/*.yml": "Azure Virtual Machines",
        "articles/virtual-machine-scale-sets/*.md": "Azure Virtual Machine Scale Sets",
        "articles/virtual-machine-scale-sets/*.yml": "Azure Virtual Machine Scale Sets",
        "articles/azure-video-analyzer/video-analyzer-docs/*.md": "Azure Video Analyzer",
        "articles/azure-video-analyzer/video-analyzer-docs/*.yml": "Azure Video Analyzer",
        "articles/azure-video-analyzer/video-analyzer-media-docs/*.md": "Azure Video Analyzer for Media",
        "articles/azure-video-analyzer/video-analyzer-media-docs/*.yml": "Azure Video Analyzer for Media"
      }
    },
    "template": [
      "docs.html"
    ],
    "dest": "azure",
    "rules": {
      "sensitive-language-ma": {
        "exclude": [
          "articles/app-service/deploy-local-git.md",
          "articles/azure-netapp-files/faq-application-resilience.md",
          "articles/governance/blueprints/**/*.md",
          "articles/governance/policy/**/*.md",
          "articles/hdinsight/hdinsight-high-availability-components.md",
          "articles/hdinsight/optimize-hbase-ambari.md",
          "articles/mariadb/**/*.md",
          "articles/mysql/**/*.md",
          "articles/postgresql/**/*.md",
          "articles/site-recovery/**/*.md",
          "articles/virtual-machines/workloads/sap/dbms-guide-ha-ibm.md",
          "articles/virtual-machines/workloads/sap/hana-vm-troubleshoot-scale-out-ha-on-sles.md",
          "articles/virtual-machines/workloads/sap/high-availability-guide-rhel-ibm-db2-luw.md",
          "articles/virtual-machines/workloads/sap/high-availability-guide-suse-nfs.md",
          "articles/virtual-machines/workloads/sap/sap-hana-high-availability-netapp-files-red-hat.md",
          "articles/virtual-machines/workloads/sap/sap-hana-high-availability-netapp-files-suse.md",
          "articles/virtual-machines/workloads/sap/sap-hana-high-availability-rhel.md",
          "articles/virtual-machines/workloads/sap/sap-hana-high-availability-scale-out-hsr-rhel.md",
          "articles/virtual-machines/workloads/sap/sap-hana-high-availability.md",
          "articles/virtual-machines/workloads/sap/sap-hana-scale-out-standby-netapp-files-rhel.md"
        ]
      },
      "sensitive-language-sl": {
        "exclude": [
          "articles/azure-netapp-files/azure-netapp-files-create-volumes.md",
          "articles/azure-netapp-files/faq-application-resilience.md",
          "articles/azure-sql/virtual-machines/linux/rhel-high-availability-listener-tutorial.md",
          "articles/azure-sql/virtual-machines/linux/rhel-high-availability-stonith-tutorial.md",
          "articles/cognitive-services/Computer-vision/deploy-computer-vision-on-premises.md",
          "articles/databox-online/azure-stack-edge-gpu-deploy-stateless-application-git-ops-guestbook.md",
          "articles/defender-for-iot/organizations/alert-engine-messages.md",
          "articles/dms/known-issues-troubleshooting-dms.md",
          "articles/dms/tutorial-mysql-azure-mysql-online.md",
          "articles/hdinsight/hdinsight-high-availability-components.md",
          "articles/mariadb/**/*.md",
          "articles/mysql/**/*.md",
          "articles/postgresql/**/*.md",
          "articles/site-recovery/**/*.md",
          "articles/virtual-machines/workloads/sap/dbms-guide-ha-ibm.md",
          "articles/virtual-machines/workloads/sap/hana-vm-troubleshoot-scale-out-ha-on-sles.md",
          "articles/virtual-machines/workloads/sap/sap-hana-high-availability-netapp-files-suse.md",
          "articles/virtual-machines/workloads/sap/high-availability-guide-rhel-ibm-db2-luw.md",
          "articles/virtual-machines/workloads/sap/high-availability-guide-suse-nfs.md",
          "articles/virtual-machines/workloads/sap/large-instance-high-availability-rhel.md",
          "articles/virtual-machines/workloads/sap/sap-hana-high-availability-netapp-files-red-hat.md",
          "articles/virtual-machines/workloads/sap/sap-hana-high-availability-rhel.md",
          "articles/virtual-machines/workloads/sap/sap-hana-high-availability-scale-out-hsr-rhel.md",
          "articles/virtual-machines/workloads/sap/sap-hana-high-availability-scale-out-hsr-suse.md",
          "articles/virtual-machines/workloads/sap/sap-hana-high-availability.md",
          "articles/virtual-machines/workloads/sap/sap-hana-scale-out-standby-netapp-files-rhel.md",
          "articles/virtual-machines/workloads/sap/sap-hana-scale-out-standby-netapp-files-suse.md",
          "articles/vmware-cloudsimple/on-premises-dns-setup.md"
        ]
      },
      "sensitive-language-bl": {
        "exclude": [
          "articles/azure-monitor/app/opencensus-python-request.md",
          "articles/governance/blueprints/**/*.md",
          "articles/governance/policy/**/*.md",
          "articles/mariadb/concepts-certificate-rotation.md",
          "articles/mariadb/concepts-read-replicas.md",
          "articles/mariadb/howto-create-users.md",
          "articles/mariadb/howto-data-in-replication.md",
          "articles/mysql/concepts-certificate-rotation.md",
          "articles/mysql/concepts-read-replicas.md",
          "articles/mysql/flexible-server/concepts-read-replicas.md",
          "articles/mysql/howto-create-users.md",
          "articles/mysql/howto-data-in-replication.md",
          "articles/mysql/howto-troubleshoot-replication-latency.md",
          "articles/postgresql/hyperscale/tutorial-design-database-multi-tenant.md",
          "articles/site-recovery/**/*.md",
          "articles/storsimple/storsimple-configure-mpio-on-linux.md",
          "articles/virtual-machines/linux/n-series-driver-setup.md",
          "articles/virtual-machines/workloads/sap/dbms-guide-ha-ibm.md",
          "articles/virtual-machines/workloads/sap/hana-vm-troubleshoot-scale-out-ha-on-sles.md",
          "articles/virtual-machines/workloads/sap/high-availability-guide-rhel-ibm-db2-luw.md",
          "articles/virtual-machines/workloads/sap/high-availability-guide-suse-nfs.md",
          "articles/virtual-machines/workloads/sap/large-instance-high-availability-rhel.md",
          "articles/virtual-machines/workloads/sap/os-upgrade-hana-large-instance.md",
          "articles/virtual-machines/workloads/sap/sap-hana-high-availability-netapp-files-red-hat.md",
          "articles/virtual-machines/workloads/sap/sap-hana-high-availability-rhel.md",
          "articles/virtual-machines/workloads/sap/sap-hana-high-availability-scale-out-hsr-rhel.md",
          "articles/virtual-machines/workloads/sap/sap-hana-high-availability.md",
          "articles/virtual-machines/workloads/sap/sap-hana-scale-out-standby-netapp-files-rhel.md",
          "articles/web-application-firewall/ag/application-gateway-crs-rulegroups-rules.md",
          "articles/web-application-firewall/afds/waf-front-door-drs.md"
        ]
      },
      "sensitive-language-wl": {
        "exclude": [
          "articles/active-directory/app-provisioning/sap-successfactors-integration-reference.md",
          "articles/active-directory/authentication/howto-mfa-nps-extension-advanced.md",
          "articles/active-directory/hybrid/how-to-connect-health-adfs-risky-ip.md",
          "articles/active-directory/hybrid/how-to-connect-sso-quick-start.md",
          "articles/active-directory/hybrid/reference-connect-government-cloud.md",
          "articles/active-directory/saas-apps/g-suite-provisioning-tutorial.md",
          "articles/application-gateway/application-gateway-backend-health-troubleshooting.md",
          "articles/app-service/reference-app-settings.md",
          "articles/cognitive-services/content-moderator/review-tool-user-guide/configure.md",
          "articles/defender-for-iot/organizations/references-horizon-sdk.md",
          "articles/event-hubs/event-hubs-kafka-connect-debezium.md",
          "articles/event-hubs/event-hubs-kafka-mirror-maker-tutorial.md",
          "articles/governance/blueprints/**/*.md",
          "articles/governance/policy/**/*.md",
          "articles/hdinsight/interactive-query/apache-hive-warehouse-connector-zeppelin.md",
          "articles/hdinsight/kafka/apache-kafka-mirroring.md",
          "articles/machine-learning/azure-machine-learning-release-notes.md",
          "articles/managed-instance-apache-cassandra/monitor-clusters.md",
          "articles/mariadb/concepts-certificate-rotation.md",
          "articles/mariadb/concepts-read-replicas.md",
          "articles/mariadb/howto-create-users.md",
          "articles/mariadb/howto-data-in-replication.md",
          "articles/mysql/concepts-certificate-rotation.md",
          "articles/mysql/concepts-read-replicas.md",
          "articles/mysql/flexible-server/concepts-read-replicas.md",
          "articles/mysql/howto-create-users.md",
          "articles/mysql/howto-data-in-replication.md",
          "articles/mysql/howto-troubleshoot-replication-latency.md",
          "articles/role-based-access-control/resource-provider-operations.md",
          "articles/site-recovery/**/*.md",
          "articles/storsimple/storsimple-configure-mpio-on-linux.md",
          "articles/synapse-analytics/sql-data-warehouse/sql-data-warehouse-get-started-create-support-ticket.md",
          "articles/virtual-machines/workloads/sap/dbms-guide-ha-ibm.md",
          "articles/virtual-machines/workloads/sap/hana-vm-troubleshoot-scale-out-ha-on-sles.md",
          "articles/virtual-machines/workloads/sap/high-availability-guide-rhel-ibm-db2-luw.md",
          "articles/virtual-machines/workloads/sap/high-availability-guide-suse-nfs.md",
          "articles/virtual-machines/workloads/sap/sap-hana-high-availability-netapp-files-red-hat.md",
          "articles/virtual-machines/workloads/sap/sap-hana-high-availability-rhel.md",
          "articles/virtual-machines/workloads/sap/sap-hana-high-availability-scale-out-hsr-rhel.md",
          "articles/virtual-machines/workloads/sap/sap-hana-high-availability.md",
          "articles/virtual-machines/workloads/sap/sap-hana-scale-out-standby-netapp-files-rhel.md"
        ]
      }
    }
  }
}