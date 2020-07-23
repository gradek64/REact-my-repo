// Init the search box
(function(config) {
  'use strict';

  var applicationId = config.applicationId;
  var apiKey = config.apiKey;
  var indexName = config.indexName;

  var algolia = algoliasearch(applicationId, apiKey);
  var helper = algoliasearchHelper(algolia, indexName);
  helper.setQueryParameter('distinct', true);
  helper.on('result', onResult);

  // Input listening for queries
  var $searchInput = document.querySelector('.js-algolia__input');
  $searchInput.addEventListener('keyup', onQueryChange);

  // Content to hide/show when searching
  var $initialContent = document.querySelector('.js-algolia__initial-content');
  var $searchContent = document.querySelector('.js-algolia__search-content');
  var $searchContentResults = $searchContent.querySelector('.algolia__results');

  // User clicks the X button
  document.querySelector( ".search__clear" ).addEventListener('click', function() {
    document.querySelector('.algolia__input').value = '';
    hideResults();
  });

  // Rendering templates
  var templateResult = Hogan.compile(document.querySelector('#algolia__template').innerHTML);
  var templateNoResults = document.querySelector('#algolia__template--no-results').innerHTML;

  var lastQuery;

  // Toggle result page
  function showResults() {
    // window.scroll(0, 0);
    $initialContent.className = 'algolia__initial-content js-algolia__initial-content algolia__initial-content--hidden';
    $searchContent.className = 'algolia__search-content js-algolia__search-content algolia__search-content--active';
    // document.querySelector("#footer-content").style.display = 'none';
  }
  function hideResults() {
    $initialContent.className = 'algolia__initial-content js-algolia__initial-content';
    $searchContent.className = 'algolia__search-content js-algolia__search-content';
    // document.querySelector("#footer-content").style.display = 'block';
  }

  // Handle typing query
  function onQueryChange() {
    lastQuery = this.value;
    if (lastQuery.length === 0) {
      hideResults();
      return false;
    }
    helper.setQuery(lastQuery).search();
    showResults();
  }

  function onResult(data) {
    // Avoid race conditions, discard results that do not match the latest query
    if (data.query !== lastQuery) {
      return false;
    }
    var content = data.nbHits ? renderResults(data) : templateNoResults;
    // $searchContentResults.innerHTML = content;
    $searchContentResults.innerHTML = content;
  }

  function renderResults(data) {
    return data.hits.map(function(hit) {

      hit.css_selector = encodeURI(hit.css_selector);
      hit.full_url = config.baseurl + hit.url;

      return templateResult.render(hit);
    }).join('');
  }
}(window.ALGOLIA_CONFIG));
