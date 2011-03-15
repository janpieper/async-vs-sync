Was soll erreicht werden?
-------------------------
Es sollen mehrere unterschiedliche asynchrone Anfragen gestellt, deren Ergebnisse zusammengefasst und ausgegeben werden.

Wo ist da das Problem?
----------------------
Bei dem Code im `master` ist das Problem, dass die Ausgabe kommt, bevor die Antworten der asynchronen Anfragen da sind. Die Ausgabe sieht also wie folgt aus:

    Text: ' '

Die Aufgabe
-----------
Eure Aufgabe ist es nun, den Code so anzupassen, dass die Anfragen weiterhin asynchron sind, aber am Ende die Ausgabe wie folgt aussieht:

    Text: 'Hello World'

Worauf ist zu achten?
---------------------
* Die Funktionen `setTimeout()` und `fs.readFileSync()` dürfen nicht verwendet werden.
* Die asynchronen Anfragen dürfen nicht verschachtelt werden.

Du hast eine Idee, wie das Problem gelöst werden kann?
------------------------------------------------------
Bitte deine Lösung in einem eigenen Branch, als Pull-Request, anbieten.
