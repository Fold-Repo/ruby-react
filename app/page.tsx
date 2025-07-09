'use client'

import React from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Avatar,
  useDisclosure,
} from "@heroui/react"

const page = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div>
      <h2 className='text-primary text-xs'>Hello world, How are you doing today and hope you are fine today and how was ur day ?</h2>

      <div className="flex flex-wrap gap-4 items-center">
        <Button color="success" variant="solid">
          Solid
        </Button>
        <Button color="primary" variant="faded">
          Faded
        </Button>
        <Button color="primary" variant="bordered">
          Bordered
        </Button>
        <Button color="primary" variant="light">
          Light
        </Button>
        <Button color="primary" variant="flat">
          Flat
        </Button>
        <Button color="primary" variant="ghost">
          Ghost
        </Button>
        <Button color="primary" variant="shadow">
          Shadow
        </Button>
      </div>

      <div className="flex gap-4 items-center">
        <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
        <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
    </div>

    <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                  adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                  officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                  deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

    </div>
  )
}

export default page