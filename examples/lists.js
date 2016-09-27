function isEmpty(list) {
  return list.length === 0;
}

function head(list) {
  return list[0];
}

function tail(list) {
  return list.slice(1);
}

function empty() {
  return [];
}

function add(item, list) {
  return [item].concat(list);
}

function length(list) {
  if (isEmpty(list)) return 0;

  return length(tail(list)) + 1;
}

function remove(item, list) {
  if (isEmpty(list)) return empty();

  if (head(list) === item) {
    return tail(list);
  }
  return add(head(list),
             remove(item,
                    tail(list)));
}

function removeAll(item, list) {
  if (isEmpty(list)) return empty();

  if (head(list) === item) {
    return removeAll(item, tail(list));
  }

  return add(head(list),
             removeAll(item,
                       tail(list)));
}

function map(fn, list) {
  if (isEmpty(list)) return empty();

  return add(fn(head(list)),
             map(fn, tail(list)));
}

function reduce(reducer, list, mem) {
  if (mem === undefined) {
    mem = head(list);
    list = tail(list);
  }

  if (isEmpty(list)) return mem;

  return reduce(reducer,
                tail(list),
                reducer(head(list), mem))
}