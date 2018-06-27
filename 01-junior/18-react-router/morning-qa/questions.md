* "REST"-ful API
  _ "idempotency": we can do the same thing as many times as we want, and it's not going to change anything on the server by virtue of doing it over and over
  * GET /puppies => is idempotent
  * POST /puppies => NOT idempotent
  * PUT /puppies/:puppyId => should be idempotent
  * DELETE /puppies/:puppyId => should be idempotent
* How do props get passed around, what are they, how are they different from state, etc
* Should you initialize state with null/undefined
  * A: you probably shouldn't
* Binding instance methods of classes that use `this`
