function status(request, response) {
  response.status(200).json({chave: "valor é top"})
}

export default status;