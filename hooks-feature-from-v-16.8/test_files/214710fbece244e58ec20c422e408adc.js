document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-52b3348036dbd45f4ab76e44de42ebc4.css">')
document.write('<div id=\"gist95988525\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-statecounterv2-jsx\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-jsx \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\" data-paste-markdown-skip>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">const<\/span> <span class=\"pl-en\">StateCounterV2<\/span> <span class=\"pl-k\">=<\/span> () <span class=\"pl-k\">=&gt;<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC2\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">let<\/span> [<span class=\"pl-smi\">state<\/span>, <span class=\"pl-smi\">setState<\/span>] <span class=\"pl-k\">=<\/span> <span class=\"pl-en\">useState<\/span>({<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC3\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\"><span class=\"pl-s\">count<\/span>:<\/span> <span class=\"pl-c1\">0<\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC4\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\"><span class=\"pl-s\">frozen<\/span>:<\/span> <span class=\"pl-c1\">false<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC5\" class=\"blob-code blob-code-inner js-file-line\">  });<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC6\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC7\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">const<\/span> <span class=\"pl-en\">increment<\/span> <span class=\"pl-k\">=<\/span> () <span class=\"pl-k\">=&gt;<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC8\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-en\">setState<\/span>(<span class=\"pl-smi\">prevState<\/span> <span class=\"pl-k\">=&gt;<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC9\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-k\">if<\/span> (<span class=\"pl-smi\"><span class=\"pl-smi\">prevState<\/span><\/span><span class=\"pl-k\">.<\/span><span class=\"pl-smi\">frozen<\/span>) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC10\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">return<\/span> <span class=\"pl-smi\">prevState<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC11\" class=\"blob-code blob-code-inner js-file-line\">      }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC12\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-k\">return<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC13\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">...<\/span><span class=\"pl-smi\">prevState<\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC14\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c1\"><span class=\"pl-s\">count<\/span>:<\/span> <span class=\"pl-smi\"><span class=\"pl-smi\">prevState<\/span><\/span><span class=\"pl-k\">.<\/span><span class=\"pl-smi\">count<\/span> <span class=\"pl-k\">+<\/span> <span class=\"pl-c1\">1<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC15\" class=\"blob-code blob-code-inner js-file-line\">      };<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC16\" class=\"blob-code blob-code-inner js-file-line\">    });<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC17\" class=\"blob-code blob-code-inner js-file-line\">  };<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC18\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC19\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">const<\/span> <span class=\"pl-en\">setFrozen<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-smi\">frozen<\/span> <span class=\"pl-k\">=&gt;<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC20\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-en\">setState<\/span>(<span class=\"pl-smi\">prevState<\/span> <span class=\"pl-k\">=&gt;<\/span> ({<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC21\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-k\">...<\/span><span class=\"pl-smi\">prevState<\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC22\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-smi\">frozen<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC23\" class=\"blob-code blob-code-inner js-file-line\">    }));<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC24\" class=\"blob-code blob-code-inner js-file-line\">  };<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC25\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC26\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-en\">useEffect<\/span>(() <span class=\"pl-k\">=&gt;<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC27\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-en\">increment<\/span>();<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC28\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-en\">setFrozen<\/span>(<span class=\"pl-c1\">true<\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC29\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-en\">increment<\/span>();<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC30\" class=\"blob-code blob-code-inner js-file-line\">  }, []);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC31\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC32\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">return<\/span> &lt;<span class=\"pl-ent\">div<\/span>&gt;<span class=\"pl-pse\">{<\/span><span class=\"pl-smi\"><span class=\"pl-smi\">state<\/span><\/span><span class=\"pl-k\">.<\/span><span class=\"pl-smi\">count<\/span><span class=\"pl-pse\">}<\/span>&lt;/<span class=\"pl-ent\">div<\/span>&gt;;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L33\" class=\"blob-num js-line-number\" data-line-number=\"33\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC33\" class=\"blob-code blob-code-inner js-file-line\">};<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L34\" class=\"blob-num js-line-number\" data-line-number=\"34\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC34\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-statecounterv2-jsx-L35\" class=\"blob-num js-line-number\" data-line-number=\"35\"><\/td>\n        <td id=\"file-statecounterv2-jsx-LC35\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Renders: 1<\/span><\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/malerba118/214710fbece244e58ec20c422e408adc/raw/c081f2f0b89a0309a9669ee2680472a46340bd67/StateCounterV2.jsx\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/malerba118/214710fbece244e58ec20c422e408adc#file-statecounterv2-jsx\">StateCounterV2.jsx<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
