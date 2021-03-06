// Generated automatically by nearley, version 2.16.0
// http://github.com/Hardmath123/nearley

export function id(x) { return x[0]; }
export var grammar = {
    Lexer: undefined,
    ParserRules: [
{"name": "CG$string$1", "symbols": [{"literal":":"}, {"literal":":"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CG$ebnf$1$subexpression$1", "symbols": ["Concept"]},
    {"name": "CG$ebnf$1$subexpression$1", "symbols": ["Relation"]},
    {"name": "CG$ebnf$1", "symbols": ["CG$ebnf$1$subexpression$1"]},
    {"name": "CG$ebnf$1$subexpression$2", "symbols": ["Concept"]},
    {"name": "CG$ebnf$1$subexpression$2", "symbols": ["Relation"]},
    {"name": "CG$ebnf$1", "symbols": ["CG$ebnf$1", "CG$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "CG", "symbols": ["Label", "CG$string$1", "CG$ebnf$1"], "postprocess":  function(d){
        return {type: 'axiom', label: d[0], data:d[2]};
        } },
    {"name": "Concept$ebnf$1$subexpression$1", "symbols": [{"literal":":"}, "Referent"]},
    {"name": "Concept$ebnf$1", "symbols": ["Concept$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Concept$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Concept$ebnf$2$subexpression$1", "symbols": [{"literal":"("}, "Val", {"literal":")"}]},
    {"name": "Concept$ebnf$2", "symbols": ["Concept$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "Concept$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Concept", "symbols": [{"literal":"["}, "Label", "Concept$ebnf$1", "identifier", "Concept$ebnf$2", {"literal":"]"}], "postprocess":  function(d){
        var con = {};
        con.label = d[1];
        con.type = 'concept';
        if(d[2]){
          con.referent = d[2][1];
        }
        con.identifier = d[3];
        if(d[4]){
          con.fuzzy = parseFloat(d[4][1]);
        }
        return con;
        }},
    {"name": "identifier$subexpression$1", "symbols": [{"literal":"*"}, "Referent"]},
    {"name": "identifier", "symbols": ["identifier$subexpression$1"], "postprocess": (d)=> d[0].join('')},
    {"name": "Relation$ebnf$1", "symbols": ["Arc"]},
    {"name": "Relation$ebnf$1", "symbols": ["Relation$ebnf$1", "Arc"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Relation", "symbols": [{"literal":"("}, "Label", "Relation$ebnf$1", {"literal":")"}], "postprocess":  function(d) {
        return {label:d[1], type:'relation', arcI:d[2]};
        } },
    {"name": "Arc$subexpression$1", "symbols": [{"literal":"?"}, "Referent"]},
    {"name": "Arc", "symbols": ["Arc$subexpression$1"], "postprocess": (d)=> d[0].join('')},
    {"name": "Label$ebnf$1", "symbols": ["Mixed"]},
    {"name": "Label$ebnf$1", "symbols": ["Label$ebnf$1", "Mixed"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Label", "symbols": ["Label$ebnf$1"], "postprocess": (d)=> d[0].join('')},
    {"name": "Referent$ebnf$1", "symbols": ["Mixed"]},
    {"name": "Referent$ebnf$1", "symbols": ["Referent$ebnf$1", "Mixed"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Referent", "symbols": ["Referent$ebnf$1"], "postprocess": (d)=> d[0].join('')},
    {"name": "Val$ebnf$1", "symbols": ["Fuzzy"]},
    {"name": "Val$ebnf$1", "symbols": ["Val$ebnf$1", "Fuzzy"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Val", "symbols": ["Val$ebnf$1"], "postprocess": (d)=> d[0].join('')},
    {"name": "Letter", "symbols": [/[ a-zA-Z]/]},
    {"name": "Mixed", "symbols": [/[ a-zA-Z0-9=*]/]},
    {"name": "Fuzzy", "symbols": [/[+-.0-9=*]/]}
]
    , ParserStart: "CG"
  };
