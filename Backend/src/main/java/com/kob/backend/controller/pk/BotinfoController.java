package com.kob.backend.controller.pk;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pk/")
public class BotinfoController {
    @RequestMapping("getBotinfo/")
    public String getBotinfo(){
        return "6";
    }
}
