import { pool } from "../db/conexion.js";

export const validarCita = async (req, res, next) => {
 /**/
   const body=req.body;
  const NumeroDocumento=body.NumeroDocumento;
    

  const id_Horario=body.id_Horario; 
  const [rows] = await pool.query("SELECT * FROM Citas WHERE NumeroDocumento = ? AND id_Horario = ?", [NumeroDocumento, id_Horario  ]);
  

  if (rows.length >0) {
    return res.status(400).json({ // Cambiado a 400 (Petición incorrecta)
        id:0,
        message: "Usted ya tiene una cita agendada para esta fecha/hora."
    })
  
}
  next();
};

