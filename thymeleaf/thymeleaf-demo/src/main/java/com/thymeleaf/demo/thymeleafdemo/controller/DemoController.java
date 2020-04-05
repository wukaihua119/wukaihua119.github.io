package com.thymeleaf.demo.thymeleafdemo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping; 

@Controller 
public class DemoController{ 
    private String msg; 
    private String msgs[]; 

    DemoController(){}; 

    @GetMapping 
    public String main( Model model ){ 

        this.msg = "This is a message from backend."; 
        this.msgs = new String [] { "abc", "Abc", "aBc", "abC" }; 
        model.addAttribute("message", this.msg ); 
        model.addAttribute("messages", this.msgs ); 

        return "hello"; 
    }

}