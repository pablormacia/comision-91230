import React, { useCallback, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { Task } from './src/types'
import { colors, spacing } from './src/theme'
import { SEED_TASKS } from './src/data/seed'

import FlatListScreen from './src/screens/FlatListScreen'
import TaskDetailScreen from './src/screens/TaskDetailScreen'
import TaskForm from './src/components/TaskForm'

export default function App() {

  const [tasks, setTasks] = useState<Task[]>(SEED_TASKS)

  const [selectedTask, setSelectedTask] = useState<Task | null>(null)


  const addTask = useCallback((task: Task) => {

    setTasks((prev) => [task, ...prev])
  }, [])

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )

    setSelectedTask((sel) => (sel && sel.id === id ? { ...sel, completed: !sel.completed } : sel))
  }, [])


  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))

    setSelectedTask(null)
  }, [])

  const openDetail = useCallback((task: Task) => setSelectedTask(task), [])

  const closeDetail = useCallback(() => setSelectedTask(null), [])


  return (

    <SafeAreaProvider>
      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
        <StatusBar style="dark" />
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View style={styles.screen}>
            <View>
              <Text style={styles.brand}>TaskFlow</Text>
              <Text style={styles.subtitle}>Listas, formulario y detalle</Text>
            </View>
            {selectedTask ? (
              <View style={styles.screen}>
                <TaskDetailScreen
                  task={selectedTask}
                  onBack={closeDetail}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                />
              </View>
            ) : (
              <View style={styles.screen}>
                  <FlatListScreen tasks={tasks} onToggle={toggleTask} onSelect={openDetail} />

                <TaskForm onAdd={addTask} />
              </View>
            )}
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  safe: {
    /* Esta cadena de `flex: 1` desde la raíz hasta la lista es lo que hace que
       la FlatList tenga altura y pueda scrollear. Si cortás el `flex: 1` en
       cualquier eslabón, la lista desaparece sin dar error. */
    flex: 1,
    backgroundColor: colors.canvas
  },
  screen: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.lg
  },
  brand: {
    fontSize: 24,
    fontWeight: '900',
    color: colors.ink,
    /* `letterSpacing` negativo junta un poco las letras. En títulos grandes y
       en negrita, el espaciado por defecto se ve suelto; apretarlo apenas los
       hace ver más sólidos. Es un recurso tipográfico, no un capricho: usalo
       solo en textos grandes, nunca en texto de lectura. */
    letterSpacing: -0.5
  },
  subtitle: {
    fontSize: 14,
    color: colors.muted,
    marginTop: spacing.xs
  }
})
