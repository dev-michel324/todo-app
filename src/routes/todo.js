const express = require("express");
const Todo = require("./../models/Todos");
const formValidator = require("./../utils/formValidator");

const app = express.Router();

app.get("/addtodo", (req, res) => {
    let messages = req.session.messages;
    req.session.messages = false;
  
    res.render("addtodo", { messages: messages });
  });
  
  app.post("/addtodo", (req, res) => {
    let todoObjPost = {
      title: req.body.title,
      description: req.body.description,
    };
  
    const msgs = [];
    todoObjPost = formValidator.removeSpaces(todoObjPost);
    if (formValidator.checkFieldIsEmpty(todoObjPost.title)) {
      msgs.push({
        message: "O campo titulo está vazio!",
        type: "error",
      });
      req.session.messages = msgs;
      return res.redirect("/addtodo");
    }
  
    try {
      Todo.create({
        title: todoObjPost.title,
        description: todoObjPost.description,
      });
      msgs.push({ message: "Todo adicionado!", type: "success" });
    } catch (err) {
      msgs.push({
        message: "Erro ao salvar no DB.",
        type: "error",
      });
    }
  
    req.session.messages = msgs;
    return res.redirect("/");
  });

app.post('/update', (req, res) => {
    const id = parseInt(req.body.id);

    Todo.findByPk(id).then((values) => {
        return res.render('edittodo', {id: values.id, title: values.title, description: values.description});
    }).catch((err) => {
        req.session.messages = [{message: "Tarefa não encontrada!", type: "error"}];
        return res.redirect('/');
    })
})

app.post('/edit', (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;

    Todo.update(
        {
            title: title,
            description: description
        },
        {where: {id: id}}
    ).then(() => {
        req.session.messages = [{message: "Tarefa atualiza!", type: "success"}];
        return res.redirect('/');
    }).catch((err) => {
        req.session.messages = [{message: "Erro ao atualizar tarefa!", type: "error"}];
        return res.redirect('/');
    })
})

app.post('/close', (req, res) => {
    const id = req.body.id;
    Todo.update(
        {open: false},
        {where: {id: id}}
    ).then(() => {
        req.session.messages = [{message: "Tarefa fechada!", type: "success"}];
        return res.redirect('/');
    }).catch((err) => {
        req.session.messages = [{message: "Erro ao fechar a tarefa!", type: "error"}];
        return res.redirect('/');
    })
})

app.post('/delete', (req, res) => {
    const id = req.body.id;
    Todo.destroy(
        {where: {id: id}}
    ).then(() => {
        req.session.messages = [{message: "Tarefa deletada!", type: "success"}];
        return res.redirect('/');
    }).catch(err => {
        req.session.messages = [{message: "Erro ao deletar tarefa!", type: "error"}];
        return res.redirect('/');
    })
})

module.exports = app;