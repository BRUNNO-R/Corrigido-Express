import { Request, Response } from "express";

const principal = (req: Request, res: Response) => {
    res.render("layouts/main");
};

const sobre = (req: Request, res: Response) => {
    res.send("Página sobre");
};

const hb1 = (req: Request, res: Response) => {
    res.render("app/hb1", {
        mensagem: "Hello Handlebars",
    });
};

const hb2 = (req: Request, res: Response) => {
    res.render("app/hb2", {
        poweredByNodejs: true,
        name: "Express",
        type: "Framework",
    });
};

const hb3 = (req: Request, res: Response) => {
    const professores = [
        { nome: "Alice", sala: 1010 },
        { nome: "Bernardo", sala: 1020 },
        { nome: "Clara", sala: 1030 },
        { nome: "Daniel", sala: 1040 },
    ];
    res.render("app/hb3", { professores });
};

const hb4 = (req: Request, res: Response) => {
    const listaTecnologias = [
        { name: "Express", type: "Framework", poweredByNodejs: true },
        { name: "Laravel", type: "Framework", poweredByNodejs: false },
        { name: "React", type: "Library", poweredByNodejs: true },
        { name: "Handlebars", type: "Engine View", poweredByNodejs: true },
        { name: "Django", type: "Framework", poweredByNodejs: false },
        { name: "Docker", type: "Virtualization", poweredByNodejs: false },
        { name: "Sequelize", type: "ORM tool", poweredByNodejs: true },
    ];
    res.render("app/hb4", { listaTecnologias });
};

const hb4profs = (req: Request, res: Response) => {
    const professores = [
        { nome: "Alice", sala: 1010 },
        { nome: "Bernardo", sala: 1020 },
        { nome: "Clara", sala: 1030 },
        { nome: "Daniel", sala: 1040 },
        { nome: "Eduardo", sala: 1050 },
        { nome: "Fernanda", sala: 1060 },
        { nome: "Gabriel", sala: 1070 },
        { nome: "Helena", sala: 1080 },
        { nome: "Isabella", sala: 1090 },
        { nome: "João", sala: 1010 },
    ];
    res.render("app/hbprofs", { professores });
};

export default { principal, sobre, hb1, hb2, hb3, hb4, hb4profs };
