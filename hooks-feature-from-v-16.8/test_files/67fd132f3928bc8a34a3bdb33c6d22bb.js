document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-52b3348036dbd45f4ab76e44de42ebc4.css">')
document.write('<div id=\"gist96013064\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-globalstoreexample-js\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-javascript \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\" data-paste-markdown-skip>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>const<\/span> <span class=pl-en>createStore<\/span> <span class=pl-c1>=<\/span> <span class=pl-kos>(<\/span><span class=pl-s1>apiFactory<\/span><span class=pl-kos>,<\/span> <span class=pl-s1>initialState<\/span><span class=pl-kos>)<\/span> <span class=pl-c1>=&gt;<\/span> <span class=pl-kos>{<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC2\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-k>const<\/span> <span class=pl-v>StoreContext<\/span> <span class=pl-c1>=<\/span> <span class=pl-en>createContext<\/span><span class=pl-kos>(<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC3\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC4\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-k>const<\/span> <span class=pl-v>StoreProvider<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>props<\/span> <span class=pl-c1>=&gt;<\/span> <span class=pl-kos>{<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC5\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>let<\/span> <span class=pl-s1>store<\/span> <span class=pl-c1>=<\/span> <span class=pl-en>useApi<\/span><span class=pl-kos>(<\/span><span class=pl-s1>apiFactory<\/span><span class=pl-kos>,<\/span> <span class=pl-s1>initialState<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC6\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>return<\/span> <span class=pl-kos>(<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC7\" class=\"blob-code blob-code-inner js-file-line\">      <span class=pl-c1>&lt;<\/span><span class=pl-v>StoreContext<\/span><span class=pl-kos>.<\/span><span class=pl-v>Provider<\/span> <span class=pl-c1>value<\/span><span class=pl-c1>=<\/span><span class=pl-kos>{<\/span><span class=pl-s1>store<\/span><span class=pl-kos>}<\/span><span class=pl-c1>&gt;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC8\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-kos>{<\/span><span class=pl-s1>props<\/span><span class=pl-kos>.<\/span><span class=pl-c1>children<\/span><span class=pl-kos>}<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC9\" class=\"blob-code blob-code-inner js-file-line\">      <span class=pl-c1>&lt;<\/span>/<span class=pl-v>StoreContext<\/span><span class=pl-kos>.<\/span><span class=pl-v>Provider<\/span><span class=pl-c1>&gt;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC10\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC11\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-kos>}<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC12\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC13\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-k>let<\/span> <span class=pl-en>useStore<\/span> <span class=pl-c1>=<\/span> <span class=pl-kos>(<\/span><span class=pl-kos>)<\/span> <span class=pl-c1>=&gt;<\/span> <span class=pl-kos>{<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC14\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>return<\/span> <span class=pl-en>useContext<\/span><span class=pl-kos>(<\/span><span class=pl-v>StoreContext<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC15\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-kos>}<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC16\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC17\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-k>return<\/span> <span class=pl-kos>[<\/span><span class=pl-v>StoreProvider<\/span><span class=pl-kos>,<\/span> <span class=pl-en>useStore<\/span><span class=pl-kos>]<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC18\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>}<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC19\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC20\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>let<\/span> <span class=pl-kos>[<\/span><span class=pl-v>TodosStoreProvider<\/span><span class=pl-kos>,<\/span> <span class=pl-s1>useTodosStore<\/span><span class=pl-kos>]<\/span> <span class=pl-c1>=<\/span> <span class=pl-en>createStore<\/span><span class=pl-kos>(<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC21\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-s1>todosApiFactory<\/span><span class=pl-kos>,<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC22\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-kos>{<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC23\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-c1>todos<\/span>: <span class=pl-kos>[<\/span><span class=pl-kos>]<\/span><span class=pl-kos>,<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC24\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-c1>filter<\/span>: <span class=pl-s>&quot;SHOW_ALL&quot;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC25\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-kos>}<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-globalstoreexample-js-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-globalstoreexample-js-LC26\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/malerba118/67fd132f3928bc8a34a3bdb33c6d22bb/raw/394da9e911d8ceeb3c3ab980ec240aa5a629fc49/GlobalStoreExample.js\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/malerba118/67fd132f3928bc8a34a3bdb33c6d22bb#file-globalstoreexample-js\">GlobalStoreExample.js<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
